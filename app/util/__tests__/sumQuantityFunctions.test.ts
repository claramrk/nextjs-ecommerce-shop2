import { expect, test } from '@jest/globals';
import { sumQuantity } from '../pricexQuantityFunctions';

const testArray1 = [
  { id: 1, name: 'Test', price: 2, image: '', quantity: 2 },
  { id: 2, name: 'Test', price: 2.5, image: '', quantity: 3 },
];
const testArray2 = [
  { id: 1, name: 'Test', price: 2, image: '', quantity: 1 },
  { id: 2, name: 'Test', price: 2.5, image: '', quantity: 3390391 },
];
const testArray3 = [
  { id: 1, name: 'Test', price: 2, image: '', quantity: 1 },
  { id: 2, name: 'Test', price: 2.5, image: '', quantity: 'hi' },
];
/*
const testArray4 = [
  { id: 1, name: 'Test', price: 2, image: '', quantity: '1' },
  { id: 2, name: 'Test', price: 2.5, image: '', quantity: '3' },
];
const testArray5 = [
  { id: 1, name: 'Test', price: 2, image: '', quantity: 1 },
  { id: 2, name: 'Test', price: 2.5, image: '', quantity: true },
];

*/

test('sumQuantity', () => {
  expect(sumQuantity(testArray1)).toBe(5);
  expect(sumQuantity(testArray2)).toBe(3390392);
});

test('throws an error when arguments are not numbers', () => {
  // @ts-expect-error testing incorrect arguments
  expect(() => sumQuantity(testArray3)).toThrow();
});
