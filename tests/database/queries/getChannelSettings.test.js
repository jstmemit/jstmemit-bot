import {describe, expect, it, vi} from 'vitest'
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {pool} from '#src/database/initializePool.js'
import {insertMessage} from '#src/database/queries/insertMessage.js'

vi.mock('#src/database/queries/insertMessage.js', () => ({
    insertMessage: vi.fn()
}))

describe('getChannelSettings', () => {
    it('returns channel settings when channel exists', async () => {
        const mockChannelData = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true,
            frequency: 60,
            enabled_random_memes: true,
            delete_messages_after: 3600,
            use_user_images: false,
            language: 'english',
            replace_mentions: true,
            watermarkLogo: true,
            linked_channel: '987654321'
        }

        pool.query = vi.fn().mockResolvedValue([[mockChannelData]])

        const result = await getChannelSettings('123456789')

        expect(pool.query).toHaveBeenCalledOnce()
        expect(pool.query).toHaveBeenCalledWith(
            'SELECT * FROM channels WHERE channel_id = ?',
            ['123456789']
        )
        expect(result).toEqual(mockChannelData)
        expect(insertMessage).not.toHaveBeenCalled()
    })

    it('calls insertMessage and returns null when channel does not exist', async () => {
        pool.query = vi.fn().mockResolvedValue([[]])
        insertMessage.mockResolvedValue()

        const result = await getChannelSettings('nonexistent123')

        expect(pool.query).toHaveBeenCalledOnce()
        expect(pool.query).toHaveBeenCalledWith(
            'SELECT * FROM channels WHERE channel_id = ?',
            ['nonexistent123']
        )
        expect(insertMessage).toHaveBeenCalledOnce()
        expect(insertMessage).toHaveBeenCalledWith('nonexistent123', '')
        expect(result).toBeNull()
    })

    it('handles database query errors', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const dbError = new Error('Database connection failed')

        pool.query = vi.fn().mockRejectedValue(dbError)

        await expect(getChannelSettings('123456789')).rejects.toThrow(
            'Database connection failed'
        )

        expect(pool.query).toHaveBeenCalledOnce()
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error fetching channel settings:',
            dbError
        )
        expect(insertMessage).not.toHaveBeenCalled()

        consoleErrorSpy.mockRestore()
    })

    it('handles insertMessage errors when channel does not exist', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const insertError = new Error('Insert failed')

        pool.query = vi.fn().mockResolvedValue([[]])
        insertMessage.mockRejectedValue(insertError)

        await expect(getChannelSettings('123456789')).rejects.toThrow(
            'Insert failed'
        )

        expect(pool.query).toHaveBeenCalledOnce()
        expect(insertMessage).toHaveBeenCalledOnce()
        expect(insertMessage).toHaveBeenCalledWith('123456789', '')
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error fetching channel settings:',
            insertError
        )

        consoleErrorSpy.mockRestore()
    })

    it('returns first row when multiple rows exist', async () => {
        const mockChannelData1 = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }
        const mockChannelData2 = {
            internal_id: 2,
            channel_id: '123456789',
            is_enabled: false
        }

        pool.query = vi
            .fn()
            .mockResolvedValue([[mockChannelData1, mockChannelData2]])

        const result = await getChannelSettings('123456789')

        expect(result).toEqual(mockChannelData1)
        expect(insertMessage).not.toHaveBeenCalled()
    })

    it('handles empty channel ID', async () => {
        pool.query = vi.fn().mockResolvedValue([[]])
        insertMessage.mockResolvedValue()

        const result = await getChannelSettings('')

        expect(pool.query).toHaveBeenCalledWith(
            'SELECT * FROM channels WHERE channel_id = ?',
            ['']
        )
        expect(insertMessage).toHaveBeenCalledWith('', '')
        expect(result).toBeNull()
    })

    it('handles null channel ID', async () => {
        pool.query = vi.fn().mockResolvedValue([[]])
        insertMessage.mockResolvedValue()

        const result = await getChannelSettings(null)

        expect(pool.query).toHaveBeenCalledWith(
            'SELECT * FROM channels WHERE channel_id = ?',
            [null]
        )
        expect(insertMessage).toHaveBeenCalledWith(null, '')
        expect(result).toBeNull()
    })

    it('handles undefined channel ID', async () => {
        pool.query = vi.fn().mockResolvedValue([[]])
        insertMessage.mockResolvedValue()

        const result = await getChannelSettings(undefined)

        expect(pool.query).toHaveBeenCalledWith(
            'SELECT * FROM channels WHERE channel_id = ?',
            [undefined]
        )
        expect(insertMessage).toHaveBeenCalledWith(undefined, '')
        expect(result).toBeNull()
    })

    it('handles numeric channel ID', async () => {
        const mockChannelData = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        pool.query = vi.fn().mockResolvedValue([[mockChannelData]])

        const result = await getChannelSettings(123456789)

        expect(pool.query).toHaveBeenCalledWith(
            'SELECT * FROM channels WHERE channel_id = ?',
            [123456789]
        )
        expect(result).toEqual(mockChannelData)
    })
})