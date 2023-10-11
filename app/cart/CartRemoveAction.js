'use server';

import { cookies } from 'next/headers';

export async function removeItemFromCookies(props) {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  if (props === undefined) {
    console.log('removeItemFromCookies error - no id');
  } else {
    const singleProductToUpdateIndex = await parsedCartCookie.indexOf(
      parsedCartCookie.find((c) => c.id === props),
    );

    console.log('updated array:' + singleProductToUpdateIndex);

    await parsedCartCookie.splice(Number(singleProductToUpdateIndex), 1);
    await cookies().set('cart', JSON.stringify([...parsedCartCookie]));
  }
  removeItemFromCookies().catch((error) => {
    console.log(error);
  });
}
