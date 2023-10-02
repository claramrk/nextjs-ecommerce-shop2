'use server';

import { cookies } from 'next/headers';
import { getProductsByID } from '../../database/products';

export async function setQuantityInCookies(singleProductID, quantityValue) {
  const singleProductFromDatabase = getProductsByID(singleProductID);
  const cartCookie = await cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  const singleProductToUpdate = parsedCartCookie.find(
    (c) => c.id === singleProductID,
  );
  parsedCartCookie[parsedCartCookie.indexOf(singleProductToUpdate)].quantity =
    Number(quantityValue);
  cookies().set('cart', JSON.stringify([...parsedCartCookie]));
}
setQuantityInCookies().catch((error) => {
  console.log(error);
});
