import {beforeEach, describe, expect, it, vi} from 'vitest'
import {eraseChannelMessages} from '#src/database/queries/eraseChannelMessages.js'
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {pool} from '#src/database/initializePool.js'

vi.mock('#src/database/queries/getChannelSettings.js', () => ({
    getChannelSettings: vi.fn()
}))

describe('eraseChannelMessages', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        pool.query = vi.fn()
    })

    it('returns true when channel settings do not exist', async () => {
        getChannelSettings.mockResolvedValue(null)

        const result = await eraseChannelMessages('test-channel-1', 'all')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-1')
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBe(true)
    })

    it('returns true when channel settings are undefined', async () => {
        getChannelSettings.mockResolvedValue(undefined)

        const result = await eraseChannelMessages('test-channel-2', 'all')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-2')
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBe(true)
    })

    it('deletes all messages when type is "all"', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-3',
            delete_messages_after: 7
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockResolvedValue([])

        const result = await eraseChannelMessages('test-channel-3', 'all')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-3')
        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ?',
            ['test-channel-3']
        )
        expect(result).toBe(true)
    })

    it('deletes messages by threshold when type is "threshold"', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-4',
            delete_messages_after: 30
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockResolvedValue([])

        const result = await eraseChannelMessages('test-channel-4', 'threshold')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-4')
        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ? AND timestamp < (NOW() - INTERVAL ? DAY)',
            ['test-channel-4', 30]
        )
        expect(result).toBe(true)
    })

    it('handles database error when deleting all messages', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const dbError = new Error('Database connection failed')

        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-5',
            delete_messages_after: 7
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockRejectedValue(dbError)

        const result = await eraseChannelMessages('test-channel-5', 'all')

        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ?',
            ['test-channel-5']
        )
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error deleting all channel messages:',
            dbError
        )
        expect(result).toBe(false)

        consoleErrorSpy.mockRestore()
    })

    it('handles database error when deleting messages by threshold', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const dbError = new Error('Database connection failed')

        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-6',
            delete_messages_after: 14
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockRejectedValue(dbError)

        const result = await eraseChannelMessages('test-channel-6', 'threshold')

        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ? AND timestamp < (NOW() - INTERVAL ? DAY)',
            ['test-channel-6', 14]
        )
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error deleting channel messages by threshold:',
            dbError
        )
        expect(result).toBe(false)

        consoleErrorSpy.mockRestore()
    })

    it('handles getChannelSettings error', async () => {
        const getChannelSettingsError = new Error('Failed to get channel settings')

        getChannelSettings.mockRejectedValue(getChannelSettingsError)

        await expect(eraseChannelMessages('test-channel-7', 'all')).rejects.toThrow(
            'Failed to get channel settings'
        )

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-7')
        expect(pool.query).not.toHaveBeenCalled()
    })

    it('returns undefined when type is not "all" or "threshold"', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-8',
            delete_messages_after: 7
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)

        const result = await eraseChannelMessages('test-channel-8', 'invalid')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-8')
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBeUndefined()
    })

    it('handles threshold value of 0', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-9',
            delete_messages_after: 0
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockResolvedValue([])

        const result = await eraseChannelMessages('test-channel-9', 'threshold')

        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ? AND timestamp < (NOW() - INTERVAL ? DAY)',
            ['test-channel-9', 0]
        )
        expect(result).toBe(true)
    })

    it('handles large threshold values', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-10',
            delete_messages_after: 365
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockResolvedValue([])

        const result = await eraseChannelMessages('test-channel-10', 'threshold')

        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ? AND timestamp < (NOW() - INTERVAL ? DAY)',
            ['test-channel-10', 365]
        )
        expect(result).toBe(true)
    })

    it('handles empty channel ID', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '',
            delete_messages_after: 7
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockResolvedValue([])

        const result = await eraseChannelMessages('', 'all')

        expect(getChannelSettings).toHaveBeenCalledWith('')
        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ?',
            ['']
        )
        expect(result).toBe(true)
    })

    it('handles null channel ID', async () => {
        getChannelSettings.mockResolvedValue(null)

        const result = await eraseChannelMessages(null, 'all')

        expect(getChannelSettings).toHaveBeenCalledWith(null)
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBe(true)
    })

    it('handles undefined type parameter', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-11',
            delete_messages_after: 7
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)

        const result = await eraseChannelMessages('test-channel-11', undefined)

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-11')
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBeUndefined()
    })

    it('handles null type parameter', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-12',
            delete_messages_after: 7
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)

        const result = await eraseChannelMessages('test-channel-12', null)

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-12')
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBeUndefined()
    })

    it('handles negative threshold values', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-13',
            delete_messages_after: -5
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        pool.query.mockResolvedValue([])

        const result = await eraseChannelMessages('test-channel-13', 'threshold')

        expect(pool.query).toHaveBeenCalledWith(
            'DELETE FROM messages WHERE channel_id = ? AND timestamp < (NOW() - INTERVAL ? DAY)',
            ['test-channel-13', -5]
        )
        expect(result).toBe(true)
    })

    it('handles case sensitivity of type parameter', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: 'test-channel-14',
            delete_messages_after: 7
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)

        const result = await eraseChannelMessages('test-channel-14', 'ALL')

        expect(getChannelSettings).toHaveBeenCalledWith('test-channel-14')
        expect(pool.query).not.toHaveBeenCalled()
        expect(result).toBeUndefined()
    })
})