'use server';

import { cookies } from 'next/headers';
import { getProductsByID } from '../../database/products';

export async function setQuantityInCookies(singleProductID, quantityValue) {
  const singleProductFromDatabase = getProductsByID(singleProductID);
  const cartCookie = cookies().get('cart')?.value;

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
    const parsedCartCookie = JSON.parse(cartCookie);
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
