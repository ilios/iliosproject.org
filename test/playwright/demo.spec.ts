import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Demo Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/demo');

    await expect(page).toHaveTitle('Demo | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await takeScreenshot(page, 'demo');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/demo');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
