'use server';

import { cookies } from 'next/headers';

export async function removeAllItemsFromCookies() {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  await parsedCartCookie.splice(0, parsedCartCookie.length);
  await cookies().set('cart', JSON.stringify([...parsedCartCookie]));
}
removeAllItemsFromCookies().catch((error) => {
  console.log(error);
});
