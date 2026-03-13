import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Ilios Schools Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/ilios-schools');

    await expect(page).toHaveTitle('Schools | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios Schools');
    await takeScreenshot(page, 'ilios-schools');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/ilios-schools');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
