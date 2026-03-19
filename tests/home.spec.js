const { test, expect } = require('@playwright/test');
const path = require('path');

test('should have the correct title', async ({ page }) => {
  const filePath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(filePath);
  await expect(page).toHaveTitle('Clean Books — You\'ve Got It Maid!');
});

test('should display "Today\'s Tasks" section', async ({ page }) => {
  const filePath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(filePath);
  const heading = page.locator('h2', { hasText: 'Today\'s Tasks' });
  await expect(heading).toBeVisible();
});
