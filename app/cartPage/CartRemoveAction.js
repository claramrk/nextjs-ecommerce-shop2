'use server';

import { cookies } from 'next/headers';

export async function removeItemFromCookies(props) {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  if (!props) {
    console.log('error - no id');
  }

  const singleProductToUpdateIndex = await parsedCartCookie.indexOf(
    parsedCartCookie.find((c) => c.id === props),
  );

  await parsedCartCookie.splice(Number(singleProductToUpdateIndex), 1);
  await cookies().set('cart', JSON.stringify([...parsedCartCookie]));
}
removeItemFromCookies().catch((error) => {
  console.log(error);
});
