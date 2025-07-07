import {describe, expect, it, vi} from 'vitest'
import {getChannelMessages} from '#src/database/queries/getChannelMessages.js'
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {processChannelMessages} from '#src/database/helpers/processChannelMessages.js'

vi.mock('#src/database/queries/getChannelSettings.js', () => ({
    getChannelSettings: vi.fn()
}))

vi.mock('#src/database/helpers/processChannelMessages.js', () => ({
    processChannelMessages: vi.fn()
}))

describe('getChannelMessages', () => {
    it('returns messages when channel is enabled and has messages', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true,
            frequency: 60
        }

        const mockMessages = [
            {id: 1, content: 'Hello world', channel_id: '123456789'},
            {id: 2, content: 'Another message', channel_id: '123456789'}
        ]

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        processChannelMessages.mockImplementation((channelId, visitedChannels, allMessages) => {
            allMessages.push(...mockMessages)
            return Promise.resolve()
        })

        const result = await getChannelMessages('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(getChannelSettings).toHaveBeenCalledWith('123456789')
        expect(processChannelMessages).toHaveBeenCalledOnce()
        expect(processChannelMessages).toHaveBeenCalledWith(
            '123456789',
            expect.any(Set),
            expect.any(Array)
        )
        expect(result).toEqual(mockMessages)
    })

    it('returns null when channel is disabled', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: false,
            frequency: 60
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)

        const result = await getChannelMessages('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(getChannelSettings).toHaveBeenCalledWith('123456789')
        expect(processChannelMessages).not.toHaveBeenCalled()
        expect(result).toBeNull()
    })

    it('processes messages when channel settings is null', async () => {
        const mockMessages = [
            {id: 1, content: 'Message from null channel', channel_id: '123456789'}
        ]

        getChannelSettings.mockResolvedValue(null)
        processChannelMessages.mockImplementation((channelId, visitedChannels, allMessages) => {
            allMessages.push(...mockMessages)
            return Promise.resolve()
        })

        const result = await getChannelMessages('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(processChannelMessages).toHaveBeenCalledOnce()
        expect(result).toEqual(mockMessages)
    })

    it('processes messages when channel settings is undefined', async () => {
        const mockMessages = [
            {id: 1, content: 'Message from undefined channel', channel_id: '123456789'}
        ]

        getChannelSettings.mockResolvedValue(undefined)
        processChannelMessages.mockImplementation((channelId, visitedChannels, allMessages) => {
            allMessages.push(...mockMessages)
            return Promise.resolve()
        })

        const result = await getChannelMessages('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(processChannelMessages).toHaveBeenCalledOnce()
        expect(result).toEqual(mockMessages)
    })

    it('returns null when no messages are found', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        processChannelMessages.mockImplementation(() => {
            return Promise.resolve()
        })

        const result = await getChannelMessages('123456789')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(processChannelMessages).toHaveBeenCalledOnce()
        expect(result).toBeNull()
    })

    it('handles processChannelMessages errors', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const processingError = new Error('Failed to process channel messages')

        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        processChannelMessages.mockRejectedValue(processingError)

        await expect(getChannelMessages('123456789')).rejects.toThrow(
            'Failed to process channel messages'
        )

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(processChannelMessages).toHaveBeenCalledOnce()
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error fetching channel messages:',
            processingError
        )

        consoleErrorSpy.mockRestore()
    })

    it('handles getChannelSettings errors', async () => {
        const getChannelSettingsError = new Error('Failed to get channel settings')

        getChannelSettings.mockRejectedValue(getChannelSettingsError)

        await expect(getChannelMessages('123456789')).rejects.toThrow(
            'Failed to get channel settings'
        )

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(processChannelMessages).not.toHaveBeenCalled()
    })

    it('passes correct parameters to processChannelMessages', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        processChannelMessages.mockResolvedValue()

        await getChannelMessages('123456789')

        expect(processChannelMessages).toHaveBeenCalledWith(
            '123456789',
            expect.any(Set),
            expect.any(Array)
        )

        const [channelId, visitedChannels, allMessages] = processChannelMessages.mock.calls[0]
        expect(channelId).toBe('123456789')
        expect(visitedChannels).toBeInstanceOf(Set)
        expect(visitedChannels.size).toBe(0)
        expect(allMessages).toBeInstanceOf(Array)
        expect(allMessages.length).toBe(0)
    })

    it('handles empty channel ID', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '',
            is_enabled: true
        }

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        processChannelMessages.mockResolvedValue()

        const result = await getChannelMessages('')

        expect(getChannelSettings).toHaveBeenCalledWith('')
        expect(processChannelMessages).toHaveBeenCalledWith(
            '',
            expect.any(Set),
            expect.any(Array)
        )
        expect(result).toBeNull()
    })

    it('handles null channel ID', async () => {
        getChannelSettings.mockResolvedValue(null)
        processChannelMessages.mockResolvedValue()

        const result = await getChannelMessages(null)

        expect(getChannelSettings).toHaveBeenCalledWith(null)
        expect(processChannelMessages).toHaveBeenCalledWith(
            null,
            expect.any(Set),
            expect.any(Array)
        )
        expect(result).toBeNull()
    })

    it('handles channel with is_enabled explicitly set to true', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true,
            frequency: 30
        }

        const mockMessages = [
            {id: 1, content: 'Test message', channel_id: '123456789'}
        ]

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        processChannelMessages.mockImplementation((channelId, visitedChannels, allMessages) => {
            allMessages.push(...mockMessages)
            return Promise.resolve()
        })

        const result = await getChannelMessages('123456789')

        expect(processChannelMessages).toHaveBeenCalledOnce()
        expect(result).toEqual(mockMessages)
    })

    it('handles single message result', async () => {
        const mockChannelSettings = {
            internal_id: 1,
            channel_id: '123456789',
            is_enabled: true
        }

        const mockMessage = [
            {id: 1, content: 'Single message', channel_id: '123456789'}
        ]

        getChannelSettings.mockResolvedValue(mockChannelSettings)
        processChannelMessages.mockImplementation((channelId, visitedChannels, allMessages) => {
            allMessages.push(...mockMessage)
            return Promise.resolve()
        })

        const result = await getChannelMessages('123456789')

        expect(result).toEqual(mockMessage)
        expect(result).toHaveLength(1)
    })
})