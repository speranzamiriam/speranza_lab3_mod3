import { test, expect } from '@playwright/test';

test('Boa Flight', async ({ page }) => {
  await page.goto('https://www.boa.bo/');
  await page.locator('#select_desde').selectOption('CBB');
  await page.locator('#select_hasta').selectOption('VVI');
  await page.locator('#picker_salida').click();

  
//span[@class='ui-datepicker-month'][text()="March"]  

//ancestor div padre

//a[@class='ui-state-default'][text()='3']

  const day = 15;
  const month = "March";
  const departureDate = `//span[@class="ui-datepicker-month"][text()="${month}"]//ancestor::div[contains(@class,"ui-datepicker-group ui-datepicker-group")]//a[@class="ui-state-default"][text()="${day}"]`;

  const day2 = 25;
  const month2 = "April";
  const departureDate2 = `//span[@class="ui-datepicker-month"][text()="${month2}"]//ancestor::div[contains(@class,"ui-datepicker-group ui-datepicker-group")]//a[@class="ui-state-default"][text()="${day2}"]`;
 
  
  //await page.getByRole('row', { name: '5 6 7 8 9 10 11' }).getByRole('link', { name: '8' }).click();  
  await page.locator(departureDate).click();
  await page.locator('#picker_regreso').click();

  await page.locator(departureDate2).click();
  //await page.getByRole('row', { name: '9 10 11 12 13 14 15' }).getByRole('link', { name: '12' }).click();
  await page.getByText('Search').click();
});


test('Playwright TextField', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
  
    // Set Text
    await page.locator('').fill("TEXTO ");
  
    // Expects the URL to contain intro.    
  });