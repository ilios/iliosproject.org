import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';

test('Home Page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Home | Ilios');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Ilios - Curriculum Management from UCSF',
  );
  await expect(page.getByRole('heading', { level: 2 })).toContainText('Latest News');
  await takeScreenshot(page, 'home');
});
