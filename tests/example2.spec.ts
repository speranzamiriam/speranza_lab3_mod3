import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('.getStarted_Sjon').click();
  //await page.click('.getStarted_Sjon');
  

//   await page.getByRole('button', { name: 'Search' }).click();
//   await page.getByTestId('Search docs').click();
//   await page.getByPlaceholder('Search docs').fill('examples');
//   await page.getByPlaceholder('Search docs').press('Enter');
  await page.waitForTimeout(5000);
});
