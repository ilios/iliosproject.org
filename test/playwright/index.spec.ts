import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Home | Ilios');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
});
