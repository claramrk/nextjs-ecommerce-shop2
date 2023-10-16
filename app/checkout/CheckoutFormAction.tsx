'use server';
import { cookies } from 'next/headers';
import { EmptyCookieArray } from '../util/setCookieFunction';

export async function removeAllItemsFromCookies() {
  const cookieValue = await EmptyCookieArray();
  /* const parsedCartCookie = await getParsedCookie();
  await parsedCartCookie.splice(0, parsedCartCookie.length);*/

  cookies().set('cart', cookieValue);
}
removeAllItemsFromCookies().catch((error) => {
  console.log(error);
});
