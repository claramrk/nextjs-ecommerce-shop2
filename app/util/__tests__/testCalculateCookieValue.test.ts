import { expect, test } from '@jest/globals';
import { calculateQuantityInCookiesAlreadyExisting } from '../cookieValueFunction';

// test values test 1
const testCookieArray1 = [
  { id: 1, quantity: 4 },
  { id: 3, quantity: 6 },
];
const testCookieString1 = JSON.stringify(testCookieArray1);

const addedProduct1 = { id: 1, quantity: 2 };

const expectedCookieArray1 = [
  { id: 1, quantity: 6 },
  { id: 3, quantity: 6 },
];
const expectedCookieArrayString1 = JSON.stringify(expectedCookieArray1);

test('sumQuantity', () => {
  expect(
    calculateQuantityInCookiesAlreadyExisting(
      addedProduct1.id,
      addedProduct1.quantity,
      testCookieArray1,
    ),
  ).toBe(expectedCookieArrayString1);
});
