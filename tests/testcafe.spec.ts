
import { test, expect } from '@playwright/test';

test('Test del elemento INPUT', async ({ page }) => {
  const nombre = 'Esperanza Aquino Mamani';
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator("//input[@id='developer-name']").fill(nombre);
  await expect(page.locator("#developer-name")).toHaveValue(nombre)
});


test('Test del elemento CHECKED features', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  ;
  const opciones = [
    "remote-testing",
    "reusing-js-code",
    "background-parallel-testing",
    "continuous-integration-embedding",
    "traffic-markup-analysis"
  ];

  for (let indice = 0; indice < opciones.length; indice++) {
    const opcion = opciones[indice];    
    const element = page.locator(`//*[@id="${opcion}"]`);
    await element.click();
    expect(await page.isChecked(`//*[@id="${opcion}"]`)).toBeTruthy();
  }
  
});

test('Test del elemento CHECKED de tried', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.check("//input[@id='tried-test-cafe']");
  expect(await page.isChecked("//input[@id='tried-test-cafe']")).toBeTruthy();
});
test('Test del elemento GROPU de primary Operating System', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  ;
  const opciones = [
    "windows",
    "macos",
    "linux"
  ];

  for (let indice = 0; indice < opciones.length; indice++) {
    const opcion = opciones[indice];    
    const element = page.locator(`//*[@id="${opcion}"]`);
    await element.click();
    expect(await page.isChecked(`//*[@id="${opcion}"]`)).toBeTruthy();   
  }
  
});
test('Test del elemento SELECT', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator("//select[@id='preferred-interface']").selectOption('JavaScript API');
  await expect(page.locator("select")).toHaveValue('JavaScript API');
});
test('Test del elemento slider', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.check("//input[@id='tried-test-cafe']");
  await page.check("#tried-test-cafe");
  expect(await page.locator('#slider').isVisible()).toBe(true);
});
test('Test del elemento TEXTAREA', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');  
  await page.check("//input[@id='tried-test-cafe']");
  await page.fill("textarea", "Test TextArea");
  await expect(page.locator("textarea")).toHaveValue('Test TextArea')
});


test('Test del elemento BUTTON SUBMIT', async ({ page }) => {
  const nombre = 'Esperanza Aquino Mamani';
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator("//input[@id='developer-name']").click();
  await page.locator("//input[@id='developer-name']").type(nombre);

  await page.getByTestId('submit-button').click();
  await expect(page).toHaveURL("https://devexpress.github.io/testcafe/example/thank-you.html");
});
