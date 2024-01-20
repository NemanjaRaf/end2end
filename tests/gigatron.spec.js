import { test, expect } from '@playwright/test';


// provera da li su unesti podaci dobri na kraju porudzbine
test('test', async ({ page }) => {
  await page.goto('https://gigatron.rs/');
  await page.getByRole('button', { name: 'Prihvati sve' }).click();
  await page.getByRole('button', { name: 'burger-icon Proizvodi' }).click();
  await page.getByRole('link', { name: 'Laptop računari', exact: true }).click();
  await page.getByRole('link', { name: 'Laptop računari' }).click();
  await page.getByText('Acer18').nth(1).click();
  await page.locator('a').filter({ hasText: 'ACER Extensa EX215 i7/8/' }).click();
  await page.getByRole('button', { name: 'Dodaj u korpu' }).click();
  await page.getByRole('button', { name: 'Idi u korpu' }).click();
  await page.locator('#loginDesk').getByRole('img').first().click();
  await page.getByRole('button', { name: 'Nastavite' }).click();
  await page.getByRole('button', { name: '+ Dodajte novu adresu' }).click();
  await page.locator('#new_name').click();
  await page.locator('#new_name').fill(' Nemanja Marjanov');
  await page.locator('#new_email').click();
  await page.locator('#new_email').fill('nmarjanov6121rn@raf.rs');
  await page.getByPlaceholder('Broj telefona').click();
  await page.getByPlaceholder('Broj telefona').fill('063123456');
  await page.locator('#new_address').click();
  await page.locator('#new_address').fill('Negde');
  await page.locator('#new_city').click();
  await page.locator('#new_city').fill('Beograd');
  await page.locator('#new_postal_code').click();
  await page.locator('#new_postal_code').fill('11000');
  await page.getByRole('button', { name: 'Sačuvajte adresu' }).click();
  await page.getByRole('button', { name: 'Nastavite' }).click();
  await page.locator('#payment div').filter({ hasText: 'Plaćanje prilikom' }).nth(1).click();
  await page.getByRole('button', { name: 'Nastavite' }).click();
  await page.waitForTimeout(3000);

  // provera podataka
  await expect(page.locator('#containerSelectorFocus')).toContainText('Nemanja Marjanov');
  await expect(page.locator('#containerSelectorFocus')).toContainText('Negde');
  await expect(page.locator('#containerSelectorFocus')).toContainText('11000 Beograd');
  await expect(page.locator('#containerSelectorFocus')).toContainText('063123456');
  await expect(page.locator('#containerSelectorFocus')).toContainText('nmarjanov6121rn@raf.rs');
});