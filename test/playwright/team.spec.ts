import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Team Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/team');

    await expect(page).toHaveTitle('Team | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'The Ilios Project Core Team & Contributors',
    );
    await expect(page.locator('h2').first()).toContainText('Sponsors');

    await takeScreenshot(page, 'team');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('team');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
