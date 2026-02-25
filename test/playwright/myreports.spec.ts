import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('My Reports Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/myreports');

    await expect(page).toHaveTitle('My Reports Grid | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('My Reports Grid');
    await expect(page.locator('.reports-grid')).toHaveCount(1);

    await takeScreenshot(page, 'myreports');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('myreports');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
