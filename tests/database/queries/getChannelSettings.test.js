import {describe, expect, it, vi} from 'vitest'
import './../../setup.js'
import {insertMessage} from '#src/database/queries/insertMessage.js'
import {db} from '#src/database/initializePool.js'
import {mockChannelSettings, selectBuilder} from './../../setup.js'
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {channels} from '#database/schema/schema.js'
import {eq} from 'drizzle-orm'

vi.mock(
    '#src/database/queries/insertMessage.js',
    () => ({insertMessage: vi.fn()})
)

describe('getChannelSettings', () => {
    it('returns settings when a row exists', async () => {
        selectBuilder.where.mockResolvedValue([mockChannelSettings])

        const result = await getChannelSettings('123456789')

        expect(db.select).toHaveBeenCalledTimes(1)
        expect(selectBuilder.from).toHaveBeenCalledWith(channels)
        expect(selectBuilder.where).toHaveBeenCalledWith(
            eq(channels.channelId, '123456789')
        )

        expect(result).toEqual(mockChannelSettings)
        expect(insertMessage).not.toHaveBeenCalled()
    })

    it('returns null and inserts message when no rows are found', async () => {
        selectBuilder.where.mockResolvedValue([])

        const result = await getChannelSettings('nope')

        expect(selectBuilder.where).toHaveBeenCalledWith(
            eq(channels.channelId, 'nope')
        )
        expect(result).toBeNull()
        expect(insertMessage).toHaveBeenCalledTimes(1)
        expect(insertMessage).toHaveBeenCalledWith('nope', '')
    })

    it('calls insertMessage and returns null when .where() yields nullish', async () => {
        selectBuilder.where.mockResolvedValue(null)

        const result = await getChannelSettings('new-chan')

        expect(selectBuilder.where).toHaveBeenCalledWith(
            eq(channels.channelId, 'new-chan')
        )
        expect(insertMessage).toHaveBeenCalledTimes(1)
        expect(insertMessage).toHaveBeenCalledWith('new-chan', '')
        expect(result).toBeNull()
    })

    it('catches and logs DB errors', async () => {
        const dbError = new Error('boom!')
        selectBuilder.where.mockRejectedValue(dbError)
        const spy = vi.spyOn(console, 'error').mockImplementation(() => {
        })

        const result = await getChannelSettings('123')

        expect(result).toBeNull()
        expect(insertMessage).not.toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(
            'Error fetching settings for channel 123:',
            dbError
        )

        spy.mockRestore()
    })

    it('catches and logs insertMessage errors when fallback is used', async () => {
        selectBuilder.where.mockResolvedValue(undefined)
        const insertErr = new Error('insert failed')
        insertMessage.mockRejectedValue(insertErr)
        const spy = vi.spyOn(console, 'error').mockImplementation(() => {
        })

        const result = await getChannelSettings('fallback-chan')

        expect(result).toBeNull()
        expect(insertMessage).toHaveBeenCalledTimes(1)
        expect(insertMessage).toHaveBeenCalledWith('fallback-chan', '')
        expect(spy).toHaveBeenCalledWith(
            'Error fetching settings for channel fallback-chan:',
            insertErr
        )

        spy.mockRestore()
    })

    it('returns the first row when multiple exist', async () => {
        const second = {...mockChannelSettings, internalId: 99, isEnabled: 0}
        selectBuilder.where.mockResolvedValue([mockChannelSettings, second])

        const result = await getChannelSettings('multi-row')

        expect(result).toEqual(mockChannelSettings)
    })

    ;['', null, undefined, 42].forEach((chanId) => {
        it(`handles channelId = ${String(chanId)}`, async () => {
            selectBuilder.where.mockResolvedValue([mockChannelSettings])

            const result = await getChannelSettings(chanId)

            expect(selectBuilder.where).toHaveBeenCalledWith(
                eq(channels.channelId, chanId)
            )
            expect(result).toEqual(mockChannelSettings)
        })
    })
})