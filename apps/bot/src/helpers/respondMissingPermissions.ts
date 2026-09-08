import type { ChatInputCommandInteraction, StringSelectMenuInteraction } from "discord.js";
import { type ButtonInteraction, MessageFlags } from "discord.js";
import { componentsService } from "#/container.ts";

/**
 * Sends a message about missing permissions
 *
 * @param interaction
 *
 * @author Kyrylo Maliuha
 */
export const respondMissingPermissions = async (
    interaction: ButtonInteraction | ChatInputCommandInteraction | StringSelectMenuInteraction,
): Promise<void> => {
    await interaction.reply({
        flags: [MessageFlags.IsComponentsV2, MessageFlags.Ephemeral],
        components: [
            componentsService.getMissingPermissionsMessageComponent(interaction.locale),
            componentsService.getMissingPermissionsButtons(interaction.locale),
        ],
    });
};
