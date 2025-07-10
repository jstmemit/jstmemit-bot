import {describe, expect, it, vi} from 'vitest'
import {getChannelMessagesAmount} from '#src/database/queries/getChannelMessagesAmount.js'
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {pool} from '#src/database/initializePool.js'

vi.mock('#src/database/queries/getChannelSettings.js', () => ({
    getChannelSettings: vi.fn()
}))

describe('getChannelMessagesAmount', () => {
    it('returns message count when channel is enabled', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true,
            frequency: 60
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[{count: 42}]])

        const result = await getChannelMessagesAmount('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(getChannelSettings).toHaveBeenCalledWith('123456789')
        expect(pool.query).toHaveBeenCalledOnce()
        expect(pool.query).toHaveBeenCalledWith(
            'SELECT COUNT(*) as count FROM messages WHERE channel_id = ?',
            ['123456789']
        )
        expect(result).toBe(42)
    })

    it('returns null when channel is disabled', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: false,
            frequency: 60
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)

        const result = await getChannelMessagesAmount('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(getChannelSettings).toHaveBeenCalledWith('123456789')
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBeNull()
    })

    it('returns message count when channel settings is null', async () => {
        getChannelSettings.mockResolvedValue(null)
        pool.query = vi.fn().mockResolvedValue([[{count: 15}]])

        const result = await getChannelMessagesAmount('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(pool.query).toHaveBeenCalledOnce()
        expect(pool.query).toHaveBeenCalledWith(
            'SELECT COUNT(*) as count FROM messages WHERE channel_id = ?',
            ['123456789']
        )
        expect(result).toBe(15)
    })

    it('returns message count when channel settings is undefined', async () => {
        getChannelSettings.mockResolvedValue(undefined)
        pool.query = vi.fn().mockResolvedValue([[{count: 7}]])

        const result = await getChannelMessagesAmount('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(pool.query).toHaveBeenCalledOnce()
        expect(result).toBe(7)
    })

    it('returns 0 when no messages exist', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[{count: 0}]])

        const result = await getChannelMessagesAmount('123456789')

        expect(result).toBe(0)
    })

    it('handles database query errors', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const dbError = new Error('Database connection failed')

        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockRejectedValue(dbError)

        await expect(getChannelMessagesAmount('123456789')).rejects.toThrow(
            'Database connection failed'
        )

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(pool.query).toHaveBeenCalledOnce()
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error fetching channel messages amount:',
            dbError
        )

        consoleErrorSpy.mockRestore()
    })

    it('handles getChannelSettings errors', async () => {
        const getChannelSettingsError = new Error('Failed to get channel settings')

        getChannelSettings.mockRejectedValue(getChannelSettingsError)

        await expect(getChannelMessagesAmount('123456789')).rejects.toThrow(
            'Failed to get channel settings'
        )

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(pool.query).not.toHaveBeenCalled()
    })

    it('handles large message counts', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[{count: 999999}]])

        const result = await getChannelMessagesAmount('123456789')

        expect(result).toBe(999999)
    })

    it('handles empty channel ID', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[{count: 0}]])

        const result = await getChannelMessagesAmount('')

        expect(getChannelSettings).toHaveBeenCalledWith('')
        expect(pool.query).toHaveBeenCalledWith(
            'SELECT COUNT(*) as count FROM messages WHERE channel_id = ?',
            ['']
        )
        expect(result).toBe(0)
    })

    it('handles null channel ID', async () => {
        getChannelSettings.mockResolvedValue(null)
        pool.query = vi.fn().mockResolvedValue([[{count: 0}]])

        const result = await getChannelMessagesAmount(null)

        expect(getChannelSettings).toHaveBeenCalledWith(null)
        expect(pool.query).toHaveBeenCalledWith(
            'SELECT COUNT(*) as count FROM messages WHERE channel_id = ?',
            [null]
        )
        expect(result).toBe(0)
    })

    it('handles channel with is_enabled explicitly set to true', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true,
            frequency: 30
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query = vi.fn().mockResolvedValue([[{count: 25}]])

        const result = await getChannelMessagesAmount('123456789')

        expect(pool.query).toHaveBeenCalledOnce()
        expect(result).toBe(25)
    })
})