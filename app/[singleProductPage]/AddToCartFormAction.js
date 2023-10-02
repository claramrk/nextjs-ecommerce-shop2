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

  if (cartCookie === undefined) {
    cookies().set(
      'cart',
      JSON.stringify([
        { id: singleProductFromDatabase.id, quantity: quantityValue },
      ]),
    );
    console.log(
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

  /*

  console.log(productExistsInCookieCart());

  const singleProductToUpdate = parsedCartCookie.find(
    (c) => c.id === singleProductID,
  );

  console.log(singleProductToUpdate);

  await function setQuantityLogic() {
      if (
        productExistsInCookieCart(singleProductFromDatabase.id) ? true : false
      ) {
        parsedCartCookie[singleProductID].quantity = quantityValue;
        console.log(parsedCartCookie);
        cookies().set('cart', JSON.stringify([...parsedCartCookie]));
      } else {
        parsedCartCookie.push({
          singleProductFromDatabase,
          quantity: quantityValue,
        });
        cookies().set('cart', JSON.stringify([...parsedCartCookie]));
      }
    }

    setQuantityLogic();

  };

}
*/
}
setQuantityInCookies().catch((error) => {
  console.log(error);
});
