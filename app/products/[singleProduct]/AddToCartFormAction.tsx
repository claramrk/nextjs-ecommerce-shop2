'use server';

import { cookies } from 'next/headers';
import { getProductSQLById } from '../../../database/products';
import {
  calculateQuantityInCookiesAlreadyExisting,
  calculateQuantityInCookiesNotYetExisting,
  calculateQuantityNoCookiesYet,
} from '../../util/cookieValueFunction';
import { parseJson } from '../../util/parsejson';
import { ProductWithQuantity } from '../../util/pricexQuantityFunctions';

export async function setQuantityInCookies(
  singleProductID: number,
  quantityValue: number,
) {
  const singleProductFromDatabase = await getProductSQLById(singleProductID);
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

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

    if (singleProductToUpdate && parsedCartCookie && quantityValue) {
      const cookieValue = await calculateQuantityInCookiesAlreadyExisting(
        singleProductID,
        quantityValue,
        parsedCartCookie,
      );
      cookies().set('cart', cookieValue);
    } else if (!singleProductToUpdate && quantityValue && parsedCartCookie) {
      const cookieValue = await calculateQuantityInCookiesNotYetExisting(
        singleProductFromDatabase,
        quantityValue,
        parsedCartCookie,
      );
      cookies().set('cart', cookieValue);
    }
  }
}
