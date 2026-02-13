import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('404 Error Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/missing');

    await expect(page).toHaveTitle('404 Not Found | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      "404: Rats! I couldn't find that.",
    );
    await takeScreenshot(page, '404');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/missing');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
