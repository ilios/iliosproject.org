import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('ACR Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/acr');

    await expect(page).toHaveTitle('Accessibility Conformance Report | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await takeScreenshot(page, 'acr');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/acr');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
