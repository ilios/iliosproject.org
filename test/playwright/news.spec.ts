import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('News Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/news');

    await expect(page).toHaveTitle('News | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('News');
    const posts = await page.locator('ul li').count();
    expect(posts).toBeGreaterThanOrEqual(1);

    await takeScreenshot(page, 'news');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('news');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
