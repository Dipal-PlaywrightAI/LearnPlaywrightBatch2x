import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await page.locator('[data-test="add-to-cart-tta-bolt-tshirt"]').click();
    await expect(page.getByText('$9.99')).toBeVisible();
    await page.locator('[data-test="add-to-cart-tta-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.getByText('1TTA Bolt T-ShirtGet your')).toBeVisible();
    await expect(page.getByText('1TTA Bike LightA red light')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('asda');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('sd');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('380013');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
});