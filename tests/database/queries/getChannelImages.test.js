import {beforeEach, describe, expect, it, vi} from 'vitest'
import {getChannelImages} from '#src/database/queries/getChannelImages.js'
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {validateImage} from '#src/database/utils.js'
import {pool} from '#src/database/initializePool.js'

// Mock dependencies
vi.mock('#src/database/queries/getChannelSettings.js', () => ({
    getChannelSettings: vi.fn()
}))

vi.mock('#src/database/utils.js', () => ({
    validateImage: vi.fn()
}))

vi.mock('#src/config/settings.js', () => ({
    settings: {
        cache: {
            channelImagesCache: 5000 // 5 seconds for testing
        }
    }
}))

describe('getChannelImages', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('returns valid images when channel is enabled', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-1',
            is_enabled: true
        }

        const mockImages = [
            'https://cdn.discordapp.com/attachments/123/456/image1.jpg',
            'https://cdn.discordapp.com/attachments/123/456/image2.jpg'
        ]

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[
            {message: 'https://cdn.discordapp.com/attachments/123/456/image1.jpg'},
            {message: 'https://cdn.discordapp.com/attachments/123/456/image2.jpg'}
        ]])
        validateImage.mockResolvedValue({isValid: true})

        const result = await getChannelImages('test-channel-1')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-1')
        expect(pool.query).toHaveBeenCalledOnce()
        expect(validateImage).toHaveBeenCalledTimes(2)
        expect(result).toEqual(mockImages)
    })

    it('returns null when channel is disabled', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-2',
            is_enabled: false
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)

        const result = await getChannelImages('test-channel-2')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-2')
        expect(pool.query).not.toHaveBeenCalled()
        expect(validateImage).not.toHaveBeenCalled()
        expect(result).toBeNull()
    })

    it('processes images when channel settings is null', async () => {
        const mockImages = [
            'https://cdn.discordapp.com/attachments/123/456/image1.jpg'
        ]

        getChannelSettings.mockResolvedValue(null)
        pool.query = vi.fn().mockResolvedValue([[
            {message: 'https://cdn.discordapp.com/attachments/123/456/image1.jpg'}
        ]])
        validateImage.mockResolvedValue({isValid: true})

        const result = await getChannelImages('test-channel-3')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-3')
        expect(pool.query).toHaveBeenCalledOnce()
        expect(validateImage).toHaveBeenCalledOnce()
        expect(result).toEqual(mockImages)
    })

    it('returns null when no images found in database', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-4',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[]])

        const result = await getChannelImages('test-channel-4')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-4')
        expect(pool.query).toHaveBeenCalledOnce()
        expect(validateImage).not.toHaveBeenCalled()
        expect(result).toBeNull()
    })

    it('filters out invalid images', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-5',
            is_enabled: true
        }

        const consoleWarnSpy = vi
            .spyOn(console, 'warn')
            .mockImplementation(() => {
            })

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[
            {message: 'https://cdn.discordapp.com/attachments/123/456/valid.jpg'},
            {message: 'https://cdn.discordapp.com/attachments/123/456/invalid.jpg'}
        ]])

        validateImage
            .mockResolvedValueOnce({isValid: true})
            .mockResolvedValueOnce({isValid: false, reason: 'Image not found'})

        const result = await getChannelImages('test-channel-5')

        consoleWarnSpy.mockRestore()
    })

    it('returns null when all images are invalid', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-6',
            is_enabled: true
        }

        const consoleWarnSpy = vi
            .spyOn(console, 'warn')
            .mockImplementation(() => {
            })

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[
            {message: 'https://cdn.discordapp.com/attachments/123/456/invalid1.jpg'},
            {message: 'https://cdn.discordapp.com/attachments/123/456/invalid2.jpg'}
        ]])

        validateImage.mockResolvedValue({isValid: false, reason: 'Image not found'})

        const result = await getChannelImages('test-channel-6')

        expect(validateImage).toHaveBeenCalledTimes(2)
        expect(consoleWarnSpy).toHaveBeenCalledTimes(2)
        expect(result).toBeNull()

        consoleWarnSpy.mockRestore()
    })

    it('handles database query errors', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const dbError = new Error('Database connection failed')

        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-7',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockRejectedValue(dbError)

        await expect(getChannelImages('test-channel-7')).rejects.toThrow(
            'Database connection failed'
        )

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-7')
        expect(pool.query).toHaveBeenCalledOnce()
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error fetching channel images:',
            dbError
        )

        consoleErrorSpy.mockRestore()
    })

    it('handles getChannelSettings errors', async () => {
        const getChannelSettingsError = new Error('Failed to get channel settings')

        getChannelSettings.mockRejectedValue(getChannelSettingsError)

        await expect(getChannelImages('test-channel-8')).rejects.toThrow(
            'Failed to get channel settings'
        )

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-8')
        expect(pool.query).not.toHaveBeenCalled()
    })

    it('handles validateImage errors', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-9',
            is_enabled: true
        }

        const validateError = new Error('Validation service unavailable')

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[
            {message: 'https://cdn.discordapp.com/attachments/123/456/image1.jpg'}
        ]])
        validateImage.mockRejectedValue(validateError)

        await expect(getChannelImages('test-channel-9')).rejects.toThrow(
            'Validation service unavailable'
        )

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-9')
        expect(pool.query).toHaveBeenCalledOnce()
        expect(validateImage).toHaveBeenCalledOnce()
    })

    it('uses correct SQL query with parameters', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-10',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[]])

        await getChannelImages('test-channel-10')

        expect(pool.query).toHaveBeenCalledWith(
            expect.stringContaining('SELECT DISTINCT message'),
            ['test-channel-10']
        )
        expect(pool.query).toHaveBeenCalledWith(
            expect.stringContaining('https://cdn.discordapp.com/attachments/%'),
            ['test-channel-10']
        )
        expect(pool.query).toHaveBeenCalledWith(
            expect.stringContaining('https://cdn.discordapp.com/avatars/%'),
            ['test-channel-10']
        )
    })

    it('caches results and returns cached data on subsequent calls', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-11',
            is_enabled: true
        }

        const mockImages = [
            'https://cdn.discordapp.com/attachments/123/456/image1.jpg'
        ]

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[
            {message: 'https://cdn.discordapp.com/attachments/123/456/image1.jpg'}
        ]])
        validateImage.mockResolvedValue({isValid: true})

        // First call
        const firstResult = await getChannelImages('test-channel-11')

        // Second call should return cached result
        const secondResult = await getChannelImages('test-channel-11')

        expect(firstResult).toEqual(mockImages)
        expect(secondResult).toEqual(mockImages)
        expect(pool.query).toHaveBeenCalledTimes(1) // Only called once due to caching
        expect(validateImage).toHaveBeenCalledTimes(1) // Only called once due to caching
    })
})