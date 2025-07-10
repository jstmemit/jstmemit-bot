import {describe, expect, it, vi} from 'vitest'
import {changeChannelSettings} from '#src/database/queries/changeChannelSettings.js'
import {pool} from '#src/database/initializePool.js'
import {mockChannelSettings, mockConnection} from '../../setup.js'

describe('changeChannelSettings', () => {

    it('updates existing channel settings', async () => {
        mockConnection.query
            .mockResolvedValueOnce([[{internal_id: 1}]])
            .mockResolvedValueOnce()

        await changeChannelSettings(mockChannelSettings)

        expect(pool.getConnection).toHaveBeenCalledOnce()
        expect(mockConnection.beginTransaction).toHaveBeenCalledOnce()

        expect(mockConnection.query).toHaveBeenCalledTimes(2)
        expect(mockConnection.query).toHaveBeenNthCalledWith(
            1,
            'SELECT internal_id FROM channels WHERE channel_id = ?',
            ['123456789']
        )
        expect(mockConnection.query).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining('UPDATE channels'),
            [
                true,
                60,
                true,
                3600,
                false,
                'english',
                true,
                true,
                '987654321',
                '123456789'
            ]
        )

        expect(mockConnection.commit).toHaveBeenCalledOnce()
        expect(mockConnection.rollback).not.toHaveBeenCalled()
        expect(mockConnection.release).toHaveBeenCalledOnce()
    })

    it('inserts new channel when channel does not exist', async () => {
        mockConnection.query.mockResolvedValueOnce([[]]).mockResolvedValueOnce()

        await changeChannelSettings(mockChannelSettings)

        expect(mockConnection.beginTransaction).toHaveBeenCalledOnce()

        expect(mockConnection.query).toHaveBeenCalledTimes(2)
        expect(mockConnection.query).toHaveBeenNthCalledWith(
            1,
            'SELECT internal_id FROM channels WHERE channel_id = ?',
            ['123456789']
        )
        expect(mockConnection.query).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining('INSERT INTO channels'),
            [
                '123456789',
                true,
                60,
                true,
                3600,
                false,
                'english',
                true,
                true,
                '987654321'
            ]
        )

        expect(mockConnection.commit).toHaveBeenCalledOnce()
        expect(mockConnection.rollback).not.toHaveBeenCalled()
        expect(mockConnection.release).toHaveBeenCalledOnce()
    })

    it('handles database errors and rolls back transaction', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const dbError = new Error('Database connection failed')

        mockConnection.query.mockRejectedValueOnce(dbError)

        await expect(changeChannelSettings(mockChannelSettings)).rejects.toThrow(
            'Database connection failed'
        )

        expect(mockConnection.beginTransaction).toHaveBeenCalledOnce()
        expect(mockConnection.rollback).toHaveBeenCalledOnce()
        expect(mockConnection.commit).not.toHaveBeenCalled()
        expect(mockConnection.release).toHaveBeenCalledOnce()
        expect(consoleErrorSpy).toHaveBeenCalledWith('Database error:', dbError)

        consoleErrorSpy.mockRestore()
    })

    it('handles error during update query', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const updateError = new Error('Update failed')

        mockConnection.query
            .mockResolvedValueOnce([[{internal_id: 1}]])
            .mockRejectedValueOnce(updateError)

        await expect(changeChannelSettings(mockChannelSettings)).rejects.toThrow(
            'Update failed'
        )

        expect(mockConnection.rollback).toHaveBeenCalledOnce()
        expect(mockConnection.commit).not.toHaveBeenCalled()
        expect(mockConnection.release).toHaveBeenCalledOnce()

        consoleErrorSpy.mockRestore()
    })

    it('handles error during insert query', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const insertError = new Error('Insert failed')

        mockConnection.query
            .mockResolvedValueOnce([[]])
            .mockRejectedValueOnce(insertError)

        await expect(changeChannelSettings(mockChannelSettings)).rejects.toThrow(
            'Insert failed'
        )

        expect(mockConnection.rollback).toHaveBeenCalledOnce()
        expect(mockConnection.commit).not.toHaveBeenCalled()
        expect(mockConnection.release).toHaveBeenCalledOnce()

        consoleErrorSpy.mockRestore()
    })

    it('releases connection even if rollback fails', async () => {
        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {
            })
        const queryError = new Error('Query failed')

        mockConnection.query.mockRejectedValueOnce(queryError)

        await expect(changeChannelSettings(mockChannelSettings)).rejects.toThrow(
            'Query failed'
        )

        expect(mockConnection.rollback).toHaveBeenCalledOnce()
        expect(mockConnection.release).toHaveBeenCalledOnce()

        consoleErrorSpy.mockRestore()
    })

    it('handles partial channel settings object', async () => {
        const partialSettings = {
            channel_id: '123456789',
            is_enabled: false,
            frequency: 30
        }

        mockConnection.query
            .mockResolvedValueOnce([[{internal_id: 1}]])
            .mockResolvedValueOnce()

        await changeChannelSettings(partialSettings)

        expect(mockConnection.query).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining('UPDATE channels'),
            [
                false,
                30,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                '123456789'
            ]
        )

        expect(mockConnection.commit).toHaveBeenCalledOnce()
        expect(mockConnection.release).toHaveBeenCalledOnce()
    })
})