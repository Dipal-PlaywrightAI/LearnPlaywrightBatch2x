import { test, expect } from '@playwright/test';

test('navigates to eraser workspace', async ({ page }) => {
    await page.goto('https://app.eraser.io/workspace/aGf8WeO8HWibzTxOSvQn');
    await expect(page).toHaveURL(/eraser\.io/);
});
