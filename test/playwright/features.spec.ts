import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Features Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/features');

    await expect(page).toHaveTitle('Features | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await takeScreenshot(page, 'features');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/features');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
