'use server';

import { cookies } from 'next/headers';
import { getProductSQLById } from '../../database/products';
import { getParsedCookie } from '../util/getCookie';

export async function setQuantityInCookies(singleProductID, quantityValue) {
  const singleProductFromDatabase = await getProductSQLById(singleProductID);
  const cartCookie = await cookies().get('cart')?.value;
  const parsedCartCookie = getParsedCookie();

  if (!singleProductID) {
    console.log('error - no id');
  }

  if (cartCookie === undefined) {
    cookies().set(
      'cart',
      JSON.stringify([
        { id: singleProductFromDatabase.id, quantity: quantityValue },
      ]),
    );
  } else {
    const singleProductToUpdate = parsedCartCookie.find(
      (c) => c.id === singleProductID,
    );

    if (singleProductToUpdate) {
      parsedCartCookie[
        parsedCartCookie.indexOf(singleProductToUpdate)
      ].quantity = Number(quantityValue);
      cookies().set('cart', JSON.stringify([...parsedCartCookie]));
    } else {
      parsedCartCookie.push({
        id: singleProductFromDatabase.id,
        quantity: Number(quantityValue),
      });
      cookies().set('cart', JSON.stringify([...parsedCartCookie]));
    }
  }
}

setQuantityInCookies().catch((error) => {
  console.log(error);
});
