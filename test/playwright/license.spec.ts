import { test, expect } from '@playwright/test';
import { takeScreenshot } from '../take-screenshot';
import AxeBuilder from '@axe-core/playwright';
import { DateTime } from 'luxon';

const thisYear = DateTime.now().year;

test.describe('License Page', () => {
  test('Layout', async ({ page }) => {
    await page.goto('/license');

    await expect(page).toHaveTitle('License | Ilios');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ilios');
    await expect(page.getByRole('heading', { level: 2 })).toContainText('The MIT License (MIT)');
    await expect(
      page.getByText(`Copyright (c) ${thisYear} The Regents of the University of California`),
    ).toBeVisible();

    await takeScreenshot(page, 'license');
  });

  test('should not have any a11y issues', async ({ page }) => {
    await page.goto('/license');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
