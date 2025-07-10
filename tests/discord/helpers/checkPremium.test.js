import {expect, test} from 'vitest'
import {Collection} from 'discord.js'
import {settings} from "#config/settings.js";
import {checkPremium} from "#src/discord/helpers/checkPremium.js";

test('server has premium', async () => {
    const interaction = {
        entitlements: new Collection([
            ['1234567890', {skuId: settings.monetization.premiumSkuId, deleted: false}],
            ['0987654321', {skuId: 'other-sku-id', deleted: false}]
        ])
    };

    const result = await checkPremium(interaction);
    expect(result).toBe(true);
})

test('server does not have premium', async () => {
    const interaction = {
        entitlements: new Collection([
            ['1234567890', {skuId: 'other-sku-id', deleted: false}],
            ['0987654321', {skuId: 'another-sku-id', deleted: false}]
        ])
    };

    const result = await checkPremium(interaction);
    expect(result).toBe(false);
});

test('server has expired premium', async () => {
    const interaction = {
        entitlements: new Collection([
            ['1234567890', {skuId: settings.monetization.premiumSkuId, deleted: true}],
            ['0987654321', {skuId: 'other-sku-id', deleted: false}]
        ])
    };

    const result = await checkPremium(interaction);
    expect(result).toBe(false);
});

test('server has no entitlements', async () => {
    const interaction = {
        entitlements: new Collection()
    };

    const result = await checkPremium(interaction);
    expect(result).toBe(false);
});

test('wrong entitlement collection structure', async () => {
    const interaction = {
        entitlements: new Collection([
            ['1234567890', {deleted: false}],
        ])
    };

    const result = await checkPremium(interaction);
    expect(result).toBe(false);
});