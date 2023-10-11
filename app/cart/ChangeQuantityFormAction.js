'use server';

import { cookies } from 'next/headers';
import { getProductSQLById } from '../../database/products';
import { getParsedCookie } from '../util/getCookie';

export async function changeQuantityInCookies(singleProductID, quantityValue) {
  const singleProductFromDatabase = await getProductSQLById(singleProductID);
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie = await getParsedCookie();

  if (singleProductID === undefined) {
    console.log('setQuantityInCookies error - no id');
  } else if (cartCookie === undefined) {
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

changeQuantityInCookies().catch((error) => {
  console.log(error);
});
