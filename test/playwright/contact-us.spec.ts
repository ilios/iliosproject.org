import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';

test.describe('Contact Us Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/contact-us');

    await expect(page).toHaveTitle('Contact Us | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await takeScreenshot(page, 'contact-us');
  });

  test.skip('should not have any a11y issues', async ({ page }) => {
    await page.goto('/contact-us');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
