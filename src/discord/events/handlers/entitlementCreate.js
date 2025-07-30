import {Events} from 'discord.js';
import {handleNewEntitlement} from "#src/discord/handlers/handleNewEntitlement.js";

export default {
    name: Events.EntitlementCreate,
    async execute(entitlement) {
        try {
            await handleNewEntitlement(entitlement);
        } catch (error) {
            console.error('Error handling new entitlement:', error);
            analytics.captureException(error, entitlement.guildId)
            await analytics.flush();
        }
    },
};