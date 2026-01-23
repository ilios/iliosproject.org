import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Technology Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/technology');

    await expect(page).toHaveTitle('Technology | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await expect(page.getByRole('heading', { level: 2 })).toContainText('Supported Browsers');

    await takeScreenshot(page, 'technology');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/technology');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
