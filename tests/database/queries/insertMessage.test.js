import {beforeEach, expect, test, vi} from 'vitest'
import {insertMessage} from '#src/database/queries/insertMessage.js'
import {pool} from '#src/database/initializePool.js'

vi.mock('#src/database/initializePool.js', () => ({
    pool: {
        getConnection: vi.fn()
    }
}))

const mockConnection = {
    beginTransaction: vi.fn(),
    query: vi.fn(),
    commit: vi.fn(),
    rollback: vi.fn(),
    release: vi.fn()
}

beforeEach(() => {
    vi.clearAllMocks()
    pool.getConnection.mockResolvedValue(mockConnection)
})

test('insertMessage - successful insertion', async () => {
    await insertMessage('channel123', 'Hello world!')

    expect(pool.getConnection).toHaveBeenCalledOnce()
    expect(mockConnection.beginTransaction).toHaveBeenCalledOnce()
    expect(mockConnection.query).toHaveBeenCalledTimes(2)

    expect(mockConnection.query).toHaveBeenNthCalledWith(1,
        expect.stringContaining('INSERT INTO channels'),
        ['channel123']
    )

    expect(mockConnection.query).toHaveBeenNthCalledWith(2,
        expect.stringContaining('INSERT INTO messages'),
        ['channel123', 'Hello world!']
    )

    expect(mockConnection.commit).toHaveBeenCalledOnce()
    expect(mockConnection.rollback).not.toHaveBeenCalled()
    expect(mockConnection.release).toHaveBeenCalledOnce()
})

test('insertMessage - handles database error', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
    })
    const dbError = new Error('Database connection failed')

    mockConnection.query.mockRejectedValueOnce(dbError)

    await insertMessage('channel123', 'Hello world!')

    expect(mockConnection.beginTransaction).toHaveBeenCalledOnce()
    expect(mockConnection.rollback).toHaveBeenCalledOnce()
    expect(mockConnection.commit).not.toHaveBeenCalled()
    expect(mockConnection.release).toHaveBeenCalledOnce()
    expect(consoleErrorSpy).toHaveBeenCalledWith('Database error:', dbError)

    consoleErrorSpy.mockRestore()
})

test('insertMessage - handles missing parameters', async () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {
    })

    await insertMessage('', 'Hello world!')
    await insertMessage('channel123', '')
    await insertMessage(null, 'Hello world!')

    expect(consoleLogSpy).toHaveBeenCalledWith('Error in insertMessage')
    expect(pool.getConnection).toHaveBeenCalled()

    consoleLogSpy.mockRestore()
})