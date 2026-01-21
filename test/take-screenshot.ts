import type { Page } from '@playwright/test';

const takeScreenshot = async function (page: Page, name: string) {
  const browser = page.context().browser();
  if (!browser) {
    throw new Error('Browser Missing');
  }
  const browserName = browser.browserType().name();

  const viewport = page.viewportSize();
  if (!viewport) {
    throw new Error('Viewport size is not available');
  }
  const width = viewport.width;
  const height = viewport.height;

  // Generate filename
  const path = `build/screenshots/${name}-${browserName}-${width}x${height}.png`;
  await page.screenshot({ path, fullPage: true });
};

export { takeScreenshot };
