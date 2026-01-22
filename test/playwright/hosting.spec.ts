import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Hosting Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/hosting');

    await expect(page).toHaveTitle('Hosting | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await expect(page.getByRole('heading', { level: 2 })).toContainText('We Can Host You');
    await takeScreenshot(page, 'hosting');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/hosting');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
