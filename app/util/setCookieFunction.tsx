'use server';
import { Product } from '../../migrations/00000-createTableProducts';
import { getParsedCookie } from './getCookie';

export type ProductWithQuantity = {
  id: number;
  name: string;
  price: number;
  image: string | null;
  quantity: number;
};

export async function calculateQuantityNoCookiesYet(
  singleProductFromDatabase: Product,
  quantityValue: number,
) {
  const cookieValue = await JSON.stringify([
    { id: singleProductFromDatabase.id, quantity: quantityValue },
  ]);
  return cookieValue;
}

export async function calculateQuantityInCookiesAlreadyExisting(
  singleProductID: number,
  quantityValue: number,
) {
  const parsedCartCookie = await getParsedCookie();
  const singleProductToUpdate = await parsedCartCookie.find(
    (c: ProductWithQuantity) => c.id === singleProductID,
  );
  parsedCartCookie[parsedCartCookie.indexOf(singleProductToUpdate)].quantity =
    Number(quantityValue);
  const cookieValue = JSON.stringify([...parsedCartCookie]);
  return cookieValue;
}

export async function calculateQuantityInCookiesNotYetExisting(
  singleProductFromDatabase: Product,
  quantityValue: number,
) {
  const parsedCartCookie = await getParsedCookie();

  await parsedCartCookie.push({
    id: singleProductFromDatabase.id,
    quantity: Number(quantityValue),
  });
  const cookieValue = JSON.stringify([...parsedCartCookie]);
  return cookieValue;
}

export async function EmptyCookieArray() {
  const parsedCartCookie = await getParsedCookie();
  await parsedCartCookie.splice(0, parsedCartCookie.length);
  const cookieValue = JSON.stringify([...parsedCartCookie]);

  return cookieValue;
}

/*
export function calculateQuantityInCookies(
  singleProductID: number,
  quantityValue: number,
  singleProductFromDatabase: Product,
  cartCookie: string | undefined,
) {
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  if (!singleProductID) {
    console.log('setQuantityInCookies error - no id');
  }

  if (cartCookie === undefined) {
    const cookieValue = JSON.stringify([
      { id: singleProductFromDatabase.id, quantity: quantityValue },
    ]);
    return cookieValue;
  } else {
    const singleProductToUpdate = parsedCartCookie.find(
      (c: ProductWithQuantity) => c.id === singleProductID,
    );

    if (singleProductToUpdate) {
      parsedCartCookie[
        parsedCartCookie.indexOf(singleProductToUpdate)
      ].quantity = Number(quantityValue);
      const cookieValue = JSON.stringify([...parsedCartCookie]);
      return cookieValue;
    } else {
      parsedCartCookie.push({
        id: singleProductFromDatabase.id,
        quantity: Number(quantityValue),
      });
      const cookieValue = JSON.stringify([...parsedCartCookie]);

      return cookieValue;
    }
  }
}

// calculateQuantityInCookies().catch((error) => {
//  console.log(error);
// });
*/
