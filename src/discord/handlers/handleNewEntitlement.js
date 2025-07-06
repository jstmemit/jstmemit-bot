import {analytics as posthog} from "../../../bot.js";

export const handleNewEntitlement = async (entitlement) => {
    await posthog.capture({
        event: 'entitlement_created',
        properties: {
            entitlementId: entitlement.id,
            skuId: entitlement.skuId,
        },
    })

    await posthog.flush()
}