import {describe, expect, it, vi} from 'vitest'
import {changeChannelSettings} from '#src/database/queries/changeChannelSettings.js'
import {mockChannelSettings, mockDb} from '../../setup.js'
import {log} from "../../../bot.js";

describe('changeChannelSettings', () => {

    it('performs upsert operation with onDuplicateKeyUpdate', async () => {
        await changeChannelSettings(mockChannelSettings)

        expect(mockDb.transaction).toHaveBeenCalledOnce()
        expect(mockDb.insert).toHaveBeenCalledOnce()

        const insertCall = mockDb.insert.mock.results[0].value
        expect(insertCall.values).toHaveBeenCalledWith({
            channelId: '123456789',
            isEnabled: 1,
            frequency: 5,
            enabledRandomMemes: 'all',
            deleteMessagesAfter: 14,
            useUserImages: 1,
            language: 'english',
            replaceMentions: 0,
            watermarkLogo: 0,
            linkedChannel: null
        })

        const valuesCall = insertCall.values.mock.results[0].value
        expect(valuesCall.onDuplicateKeyUpdate).toHaveBeenCalledWith({
            set: {
                isEnabled: 1,
                frequency: 5,
                enabledRandomMemes: 'all',
                deleteMessagesAfter: 14,
                useUserImages: 1,
                language: 'english',
                replaceMentions: 0,
                watermarkLogo: 0,
                linkedChannel: null
            }
        })
    })

    it('handles database errors', async () => {
        const consoleErrorSpy = vi
            .spyOn(log, 'error')
            .mockImplementation(() => {
            })
        const dbError = new Error('Database connection failed')

        mockDb.transaction.mockRejectedValue(dbError)

        await expect(changeChannelSettings(mockChannelSettings)).rejects.toThrow(
            'Database connection failed'
        )

        expect(mockDb.transaction).toHaveBeenCalledOnce()

        consoleErrorSpy.mockRestore()
    })

    it('handles partial channel settings object', async () => {
        const partialSettings = {
            channelId: '123456789',
            isEnabled: 0,
            frequency: 30
        }

        await changeChannelSettings(partialSettings)

        const insertCall = mockDb.insert.mock.results[0].value
        expect(insertCall.values).toHaveBeenCalledWith({
            channelId: '123456789',
            isEnabled: 0,
            frequency: 30,
            enabledRandomMemes: undefined,
            deleteMessagesAfter: undefined,
            useUserImages: undefined,
            language: undefined,
            replaceMentions: undefined,
            watermarkLogo: undefined,
            linkedChannel: undefined
        })
    })
})