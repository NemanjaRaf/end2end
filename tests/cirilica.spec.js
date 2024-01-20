import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://recnik.biz/latinica-u-cirilicu');
  await page.locator('textarea[name="original"]').click();
  await page.locator('textarea[name="original"]').fill('latinica u cirilicu test');
  await page.getByRole('button', { name: 'Konvertuj u ćirilicu' }).click();
  await expect(page.locator('textarea[name="flipped"]')).toHaveValue('латиница у цирилицу тест');
});