import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Parking Pricing Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/parking-pricing');

    await expect(page).toHaveTitle('Parking - Pricing | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Parking - Pricing');
    await expect(page.getByRole('heading', { level: 2 })).toContainText('We Can Host You');

    await takeScreenshot(page, 'parking-pricing');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/hosting-pricing');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
