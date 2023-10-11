import test, { expect } from '@playwright/test';
import { Product } from '../migrations/00000-createTableProducts';

const products: Product[] = [
  {
    id: 1,
    name: 'Kinder',
    price: 1,
    image:
      'https://familienausflug.info/img/4567/ausflugsziel-hermannsh%C3%B6hle-17088.jpg',
  },
  {
    id: 2,
    name: 'Ermäßigt',
    price: 2,
    image:
      'https://www.wieneralpen.at/data/_wieneralpen/mediadb/cms_pictures/%7B14eb1d3d-b983-804c-8bea-18aca08e4510%7D.jpeg',
  },
  {
    id: 3,
    name: 'Gruppenmitglied',
    price: 2.5,
    image:
      'https://cdn.1000things.at/app/uploads/Bildschirmfoto-2018-03-27-um-14.20.11.png',
  },
  {
    id: 4,
    name: 'Erwachsene/-r',
    price: 3,
    image:
      'https://vcdn.bergfex.at/images/resized/profiles/detail/fe6/4ee19122d218070c16f9a5bfdcdebfe6.jpg?1592293387',
  },
];

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('link', { name: 'Hermannshöhle' })).toBeVisible();
  await expect(page.getByTestId('products-link')).toBeVisible();

  await page.getByRole('link', { name: 'Tickets' }).click();
  await page.waitForURL('http://localhost:3000/products');
  await expect(page).toHaveURL('http://localhost:3000/products');

  await page.getByTestId('product-1').click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('1');

  await page.getByRole('link', { name: 'Tickets' }).click();
  await page.waitForURL('http://localhost:3000/products');
  await expect(page).toHaveURL('http://localhost:3000/products');

  await page.getByTestId('product-2').click();
  await page.waitForURL('http://localhost:3000/products/2');
  await expect(page).toHaveURL('http://localhost:3000/products/2');

  await page.getByTestId('product-quantity').fill('2');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('3');

  await page.getByRole('banner').getByTestId('cart-link').click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await expect(
    page
      .getByTestId('cart-product-1')
      .locator('div')
      .filter({
        hasText:
          'TICKETTICKETTICKET#########WOCHENTAGDATUMJAHRHermannshöhleKinderKirchberg am Wec',
      })
      .nth(1),
  ).toBeVisible();

  await expect(page.getByTestId('cart-product-remove-1')).toBeVisible();
  await page.getByTestId('cart-product-remove-1').click();
  await expect(page.getByTestId('cart-product-remove-1')).not.toBeVisible();

  await expect(
    page
      .getByTestId('cart-product-2')
      .locator('div')
      .filter({
        hasText:
          'TICKETTICKETTICKET#########WOCHENTAGDATUMJAHRHermannshöhleKinderKirchberg am Wec',
      })
      .nth(1),
  ).toBeVisible();

  // example

  /*
data-test-id="cart-product-remove-1"

  await page.waitForURL('http://localhost:3000/products');
  await expect(page).toHaveURL('http://localhost:3000/products');

  await expect(
    page.getByRole('heading', { name: 'These are my products' }),
  ).toBeVisible();

  await expect(page.locator('[data-test-id^="product-price-"]')).toHaveCount(5);

  for (const product of products) {
    await expect(page.getByTestId(`product-price-${product.price}`)).toHaveText(
      product.name,
    );
    await expect(page.getByRole('img', { name: product.name })).toBeVisible();
    await expect(page.getByRole('link', { name: product.name })).toBeVisible();
  }

  await page.getByRole('link', { name: 'Product' }).click();
  await page.waitForURL('http://localhost:3000/product');
  await expect(page).toHaveURL('http://localhost:3000/product');

  await expect(page.locator('[data-test-id="products-link"]')).toHaveText(
    'This is a comment',

  );  */
});
