'use server';

import { cookies } from 'next/headers';
import { getProductSQLById } from '../../../database/products';
import { ProductWithQuantity } from '../../util/pricexQuantityFunctions';
import {
  calculateQuantityInCookiesAlreadyExisting,
  calculateQuantityInCookiesNotYetExisting,
  calculateQuantityNoCookiesYet,
} from '../../util/setCookieFunction';

export async function setQuantityInCookies(
  singleProductID: number,
  quantityValue: number,
) {
  const singleProductFromDatabase = await getProductSQLById(singleProductID);
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || (await JSON.parse(cartCookie).length) === 0
      ? []
      : await JSON.parse(cartCookie);

  if (!singleProductID) {
    console.log('setQuantityInCookies error - no Product id');
  }

  if (!singleProductFromDatabase) {
    console.log('setQuantityInCookies error - no Product from Database ');
  }

  if (cartCookie === undefined && singleProductFromDatabase !== undefined) {
    const cookieValue = await calculateQuantityNoCookiesYet(
      singleProductFromDatabase,
      quantityValue,
    );
    await cookies().set('cart', cookieValue);
  } else if (
    cartCookie !== undefined &&
    singleProductFromDatabase !== undefined
  ) {
    const singleProductToUpdate = parsedCartCookie.find(
      (c: ProductWithQuantity) => c.id === singleProductID,
    );

    if (singleProductToUpdate) {
      const cookieValue = await calculateQuantityInCookiesAlreadyExisting(
        singleProductID,
        quantityValue,
        cartCookie,
      );

      await cookies().set('cart', cookieValue);
    } else {
      const cookieValue = await calculateQuantityInCookiesNotYetExisting(
        singleProductFromDatabase,
        quantityValue,
        cartCookie,
      );
      await cookies().set('cart', cookieValue);
    }
  }
}
