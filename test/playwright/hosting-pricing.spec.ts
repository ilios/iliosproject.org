import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Hosting Pricing Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/hosting-pricing');

    await expect(page).toHaveTitle('Pricing | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await takeScreenshot(page, 'hosting-pricing');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/hosting-pricing');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
