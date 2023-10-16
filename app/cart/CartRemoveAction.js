'use server';

import { cookies } from 'next/headers';
import { getParsedCookie } from '../util/getCookie';

export async function removeItemFromCookies(props) {
  const parsedCartCookie = getParsedCookie();

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
