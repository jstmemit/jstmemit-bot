import {expect, test, vi} from 'vitest'
import {MessageFlags, PermissionsBitField} from 'discord.js'
import {handlePermissionCheck} from '#src/discord/handlers/handlePermissionCheck.js';
import {getChannelSettings} from '#src/database/queries/getChannelSettings.js'
import {constructPermissionEmbed} from '#src/discord/embeds/constructPermissionEmbed.js'

vi.mock('#src/database/queries/getChannelSettings.js', () => ({
    getChannelSettings: vi.fn()
}))

vi.mock('#src/discord/embeds/constructPermissionEmbed.js', () => ({
    constructPermissionEmbed: vi.fn()
}))

test('user has MANAGE_GUILD permission - returns true', async () => {
    const interaction = {
        member: {
            permissions: new PermissionsBitField(['32'])
        },
        channelId: '1234567890',
        reply: vi.fn()
    }

    const result = await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')

    expect(result).toBe(true)
    expect(interaction.reply).not.toHaveBeenCalled()
})

test('user does not have MANAGE_GUILD permission - returns false and replies', async () => {
    const mockChannelSettings = {someSettings: 'value'}
    const mockComponents = [{type: 1, components: []}]

    getChannelSettings.mockResolvedValue(mockChannelSettings)
    constructPermissionEmbed.mockReturnValue(mockComponents)

    const interaction = {
        member: {
            permissions: new PermissionsBitField([])
        },
        channelId: '1234567890',
        reply: vi.fn()
    }

    const result = await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')

    expect(result).toBe(false)
    expect(getChannelSettings).toHaveBeenCalledWith('1234567890')
    expect(constructPermissionEmbed).toHaveBeenCalledWith(mockChannelSettings, '1234567890', 'MANAGE_GUILD')
    expect(interaction.reply).toHaveBeenCalledWith({
        flags: MessageFlags.IsComponentsV2,
        components: mockComponents,
        ephemeral: true
    })
})

test('user has other permissions but not MANAGE_GUILD', async () => {
    const mockChannelSettings = {someSettings: 'value'}
    const mockComponents = [{type: 1, components: []}]

    getChannelSettings.mockResolvedValue(mockChannelSettings)
    constructPermissionEmbed.mockReturnValue(mockComponents)

    const interaction = {
        member: {
            permissions: new PermissionsBitField(['2048'])
        },
        channelId: '1234567890',
        reply: vi.fn()
    }

    const result = await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')

    expect(result).toBe(false)
    expect(interaction.reply).toHaveBeenCalled()
})

test('user has administrator permission - returns true', async () => {
    const interaction = {
        member: {
            permissions: new PermissionsBitField(['8'])
        },
        channelId: '1234567890',
        reply: vi.fn()
    }

    const result = await handlePermissionCheck(interaction, '32', 'MANAGE_GUILD')

    expect(result).toBe(true)
    expect(interaction.reply).not.toHaveBeenCalled()
})