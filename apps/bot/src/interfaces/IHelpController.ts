import type { ButtonInteraction, ChatInputCommandInteraction, StringSelectMenuInteraction } from "discord.js";

export abstract class IHelpController {
    public abstract handleHelpInteraction(interaction: ChatInputCommandInteraction | ButtonInteraction): Promise<void>;
    public abstract handleFaqInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | StringSelectMenuInteraction,
    ): Promise<void>;
}
