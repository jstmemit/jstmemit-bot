import {Events} from 'discord.js';
import {handleNewEntitlement} from "#src/discord/handlers/handleNewEntitlement.js";
import {log} from "../../../../bot.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";

export default {
    name: Events.EntitlementCreate,
    async execute(entitlement) {
        try {
            await handleNewEntitlement(entitlement);
        } catch (error) {
            log.error('Error handling new entitlement:', error);
            analytics.captureException(error, entitlement.guildId)
            await analytics.flush();
        }
    },
};