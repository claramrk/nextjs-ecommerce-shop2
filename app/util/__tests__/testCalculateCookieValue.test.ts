import { expect, test } from '@jest/globals';
import { calculateQuantityInCookiesAlreadyExisting } from '../cookieValueFunction';

// test database products

const testProduct1 = {
  id: 1,
  name: 'Kinder',
  price: 1,
  image:
    'https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/sfa1e985dff417ba4/image/i707c3e4fc445bf98/version/1646756208/image.jpg',
};

// test values test 1
export type Cookie = {
  id: number;
  quantity: number;
};

const testCookieArray1: Cookie[] = [
  { id: 1, quantity: 4 },
  { id: 3, quantity: 6 },
];
const addedProduct1 = { id: 1, quantity: 2 };

const expectedCookieArray1 = [
  { id: 1, quantity: 6 },
  { id: 3, quantity: 6 },
];
const expectedCookieArrayString1 = JSON.stringify(expectedCookieArray1);

test('calculateQuantityInCookiesAlreadyExisting', async () => {
  const cookieValueTest = await calculateQuantityInCookiesAlreadyExisting(
    Number(testProduct1.id),
    Number(addedProduct1.quantity),
    testCookieArray1,
  );
  expect(cookieValueTest).toBe(expectedCookieArrayString1);
});
