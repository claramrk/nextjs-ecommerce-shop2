'use server';
import { cookies } from 'next/headers';
import { Product } from '../../migrations/00000-createTableProducts';
import { parseJson } from './parsejson';

export type ProductWithQuantity = {
  id: number;
  name: string;
  price: number;
  image: string | null;
  quantity: number;
};

export type Cookie = {
  id: number;
  quantity: number;
};

export async function calculateQuantityNoCookiesYet(
  singleProductFromDatabase: Product,
  quantityValue: number,
) {
  const cookieValue = JSON.stringify([
    { id: singleProductFromDatabase.id, quantity: quantityValue },
  ]);
  return await cookieValue;
}

export async function calculateQuantityInCookiesAlreadyExisting(
  singleProductID: number,
  quantityValue: number,
  parsedCookie: Cookie[],
) {
  const parsedCartCookie = await parsedCookie;
  const singleProductToUpdate = parsedCartCookie.find(
    (c: Cookie) => c.id === singleProductID,
  );

  if (singleProductToUpdate !== undefined) {
    const newQuantity =
      Number(singleProductToUpdate.quantity) + Number(quantityValue);

    const newObject = { id: singleProductID, quantity: Number(newQuantity) };

    parsedCookie[parsedCookie.indexOf(singleProductToUpdate)] = newObject;
    const cookieValue = JSON.stringify([...parsedCartCookie]);

    return cookieValue;
  } else {
    const cookieValue = JSON.stringify([...parsedCartCookie]);
    return cookieValue;
  }
}

export async function calculateQuantityInCookiesNotYetExisting(
  singleProductFromDatabase: Product,
  quantityValue: number,
  parsedCookie: Cookie[],
) {
  const parsedCartCookie = await parsedCookie;

  await parsedCartCookie.push({
    id: singleProductFromDatabase.id,
    quantity: Number(quantityValue),
  });
  const cookieValue = await JSON.stringify([...parsedCartCookie]);
  return cookieValue;
}

export async function EmptyCookieArray() {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);
  await parsedCartCookie.splice(0, parsedCartCookie.length);
  const cookieValue = JSON.stringify([...parsedCartCookie]);

  return cookieValue;
}
