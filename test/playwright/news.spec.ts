import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('News Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/news');

    await expect(page).toHaveTitle('News | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('News');
    const list = await page.locator('[data-news-list]');
    await expect(list).not.toHaveClass('is-expanded');
    const posts = await list.locator('li:visible').count();
    expect(posts).toEqual(10);

    const button = await page.locator('[data-load-more]');
    expect(button).not.toHaveClass('hidden');

    await takeScreenshot(page, 'news');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('news');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Expand to see all news', async ({ page }) => {
    await page.goto('/news');

    await expect(page).toHaveTitle('News | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('News');
    const list = await page.locator('[data-news-list]');

    const button = await page.locator('[data-load-more]');
    await button.click();
    await expect(list).toHaveClass('is-expanded');
    expect(button).toHaveClass('hidden');
    const posts = await list.locator('li:visible').count();
    expect(posts).toBeGreaterThan(20);
  });
});
