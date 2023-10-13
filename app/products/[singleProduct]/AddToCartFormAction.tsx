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
  } else if (cartCookie === undefined) {
    const cookieValue = calculateQuantityNoCookiesYet(
      singleProductFromDatabase,
      quantityValue,
    );
    cookies().set(cookieValue);
  } else {
    const singleProductToUpdate = parsedCartCookie.find(
      (c: ProductWithQuantity) => c.id === singleProductID,
    );

    if (singleProductToUpdate) {
      const cookieValue = await calculateQuantityInCookiesAlreadyExisting(
        singleProductID,
        quantityValue,
        cartCookie,
      );

      // cookies().set(cookieValue);
    } else {
      const cookieValue = await calculateQuantityInCookiesNotYetExisting(
        singleProductFromDatabase,
        quantityValue,
        cartCookie,
      );
      //   cookies().set(cookieValue);
    }
  }
}
