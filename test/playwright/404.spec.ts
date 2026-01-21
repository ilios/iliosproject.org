import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';

test('404 Error Page', async ({ page }) => {
  await page.goto('/missing');

  await expect(page).toHaveTitle('404 Not Found | Ilios');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
  await expect(page.getByRole('heading', { level: 2 })).toContainText(
    "404: Rats! I couldn't find that.",
  );
  await takeScreenshot(page, '404');
});
