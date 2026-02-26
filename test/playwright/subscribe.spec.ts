import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Subscribe Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/subscribe');

    await expect(page).toHaveTitle('Subscribe | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Subscribe');
    await expect(page.locator('#mc_embed_signup')).toHaveCount(1);

    await takeScreenshot(page, 'subscribe');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('subscribe');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
