import {beforeEach, describe, expect, it, vi} from 'vitest'
import {getChannelMessagesAmount} from '#src/database/queries/getChannelMessagesAmount.js'
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {mockDb, selectBuilder} from '../../setup.js'
import {messages} from '#src/database/schema/schema.js'

vi.mock('#src/database/queries/getChannelSettings.js', () => ({
    getChannelSettings: vi.fn(),
}))

describe('getChannelMessagesAmount', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('returns count when channel is enabled', async () => {
        getChannelSettings.mockResolvedValue({is_enabled: true})
        selectBuilder.where.mockResolvedValueOnce([{count: 42}])

        const result = await getChannelMessagesAmount('123')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(getChannelSettings).toHaveBeenCalledWith('123')
        expect(mockDb.select).toHaveBeenCalledOnce()
        expect(selectBuilder.from).toHaveBeenCalledWith(messages)
        expect(selectBuilder.where).toHaveBeenCalled()
        expect(result).toBe(42)
    })

    it('returns null when channel is disabled', async () => {
        getChannelSettings.mockResolvedValue({is_enabled: false})

        const result = await getChannelMessagesAmount('123')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(mockDb.select).not.toHaveBeenCalled()
        expect(result).toBeNull()
    })

    it('returns count when channelSettings is null', async () => {
        getChannelSettings.mockResolvedValue(null)
        selectBuilder.where.mockResolvedValueOnce([{count: 15}])

        const result = await getChannelMessagesAmount('123')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(mockDb.select).toHaveBeenCalledOnce()
        expect(result).toBe(15)
    })

    it('returns count when channelSettings is undefined', async () => {
        getChannelSettings.mockResolvedValue(undefined)
        selectBuilder.where.mockResolvedValueOnce([{count: 7}])

        const result = await getChannelMessagesAmount('123')

        expect(getChannelSettings).toHaveBeenCalledOnce()
        expect(mockDb.select).toHaveBeenCalledOnce()
        expect(result).toBe(7)
    })

    it('returns 0 when no messages exist', async () => {
        getChannelSettings.mockResolvedValue({is_enabled: true})
        selectBuilder.where.mockResolvedValueOnce([{count: 0}])

        const result = await getChannelMessagesAmount('123')

        expect(result).toBe(0)
    })

    it('handles database errors', async () => {
        const err = new Error('DB failed')
        getChannelSettings.mockResolvedValue({is_enabled: true})
        mockDb.select.mockImplementationOnce(() => {
            throw err
        })

        const spy = vi.spyOn(console, 'error').mockImplementation(() => {
        })
        await expect(getChannelMessagesAmount('123')).rejects.toThrow('DB failed')
        expect(spy).toHaveBeenCalledWith(
            'Error fetching channel messages amount:',
            err
        )
        spy.mockRestore()
    })

    it('propagates getChannelSettings errors', async () => {
        const err = new Error('Settings failed')
        getChannelSettings.mockRejectedValue(err)

        await expect(getChannelMessagesAmount('123')).rejects.toThrow(
            'Settings failed'
        )
        expect(mockDb.select).not.toHaveBeenCalled()
    })

    it('handles large counts', async () => {
        getChannelSettings.mockResolvedValue({is_enabled: true})
        selectBuilder.where.mockResolvedValueOnce([{count: 999999}])

        const result = await getChannelMessagesAmount('123')

        expect(result).toBe(999999)
    })

    it('handles empty channelId', async () => {
        getChannelSettings.mockResolvedValue({is_enabled: true})
        selectBuilder.where.mockResolvedValueOnce([{count: 0}])

        const result = await getChannelMessagesAmount('')

        expect(getChannelSettings).toHaveBeenCalledWith('')
        expect(result).toBe(0)
    })
})