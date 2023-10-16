'use server';

import { cookies } from 'next/headers';
import { parseJson } from '../util/parsejson';

export async function removeItemFromCookies(props) {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || parseJson(cartCookie).length === 0
      ? []
      : parseJson(cartCookie);

  if (props === undefined) {
    console.log('no id to remove');
  } else {
    const singleProductToUpdateIndex = await parsedCartCookie.indexOf(
      parsedCartCookie.find((c) => c.id === props),
    );

    console.log('updated array:' + singleProductToUpdateIndex);

    await parsedCartCookie.splice(Number(singleProductToUpdateIndex), 1);
    cookies().set('cart', JSON.stringify([...parsedCartCookie]));
  }
  removeItemFromCookies().catch((error) => {
    console.log(error);
  });
}
