import {expect, test, vi} from 'vitest'
import {insertMessage} from '#src/database/queries/insertMessage.js'
import {mockDb, selectBuilder} from '../../setup.js'
import {channels, messages} from '#database/schema/schema.js'
import {log} from "../../../bot.js";

test('insertMessage - successful insertion', async () => {
    selectBuilder.limit.mockResolvedValueOnce([
        {channelId: 'channel123', isEnabled: true}
    ])

    await insertMessage('channel123', 'Hello world!')

    expect(mockDb.select).toHaveBeenCalledOnce()
    expect(selectBuilder.from).toHaveBeenCalledWith(channels)
    expect(selectBuilder.where).toHaveBeenCalled()
    expect(selectBuilder.limit).toHaveBeenCalledWith(1)
    expect(mockDb.insert).toHaveBeenCalledWith(messages)
})

test('insertMessage - handles database error', async () => {
    const consoleErrorSpy = vi
        .spyOn(log, 'error')
        .mockImplementation(() => {
        })
    const dbError = new Error('Database connection failed')

    selectBuilder.limit.mockResolvedValueOnce([
        {channelId: 'channel123', isEnabled: true}
    ])
    mockDb.insert.mockReturnValueOnce({
        values: vi.fn(() => Promise.reject(dbError))
    })

    await insertMessage('channel123', 'Hello world!')

    expect(consoleErrorSpy).toHaveBeenCalledWith('Database error:', dbError)
    consoleErrorSpy.mockRestore()
})

test('insertMessage - handles missing parameters', async () => {
    const consoleLogSpy = vi
        .spyOn(log, 'error')
        .mockImplementation(() => {
        })

    await insertMessage('', 'Hello world!')
    await insertMessage('channel123', '')
    await insertMessage(null, 'Hello world!')

    expect(consoleLogSpy).toHaveBeenCalledTimes(3)

    consoleLogSpy.mockRestore()
})