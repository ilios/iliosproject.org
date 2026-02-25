import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Timeline Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/timeline');

    await expect(page).toHaveTitle('Timeline | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios Timeline');
    await expect(page.locator('h2').first()).toContainText('Past Progress');
    await expect(page.locator('h2').nth(1)).toContainText('Current Roadmap');

    await takeScreenshot(page, 'timeline');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('timeline');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
