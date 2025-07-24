import {analytics} from "#src/analytics/initializeAnalytics.js";

export const handleNewEntitlement = async (entitlement) => {
    await analytics.capture({
        event: 'entitlement_created',
        properties: {
            entitlementId: entitlement.id,
            skuId: entitlement.skuId,
        },
    })

    await analytics.flush()
}