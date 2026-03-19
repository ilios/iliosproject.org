import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('About Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/about');

    await expect(page).toHaveTitle('About | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('About');
    await takeScreenshot(page, 'about');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/about');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('iframe[data-slideshow]')
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
