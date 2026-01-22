import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Hosting Pricing Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/hosting-pricing');

    await expect(page).toHaveTitle('Pricing | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await expect(page.getByRole('heading', { level: 2 })).toContainText('We Can Host You');

    //I left this hardcoded on purpose so we'd have to take a peek at this pricae list at least once a year
    await expect(page.getByRole('heading', { level: 3 })).toContainText(
      'PRICE LIST (as of 1/1/2026)',
    );
    await takeScreenshot(page, 'hosting-pricing');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/hosting-pricing');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
