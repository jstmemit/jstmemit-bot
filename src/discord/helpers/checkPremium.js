import {settings} from "../../../config/settings.js";

export const checkPremium = async (interaction) => {

    if (interaction.entitlements && interaction.entitlements.size > 0) {
        return interaction.entitlements.some(
            (entitlement) =>
                entitlement.skuId === settings.monetization.premiumSkuId && !entitlement.deleted
        );
    }
    return false;
}