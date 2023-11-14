'use server';
import { cookies } from 'next/headers';
import { EmptyCookieArray } from '../util/cookieValueFunction';

export async function removeAllItemsFromCookies() {
  const cookieValue = await EmptyCookieArray();


  cookies().set('cart', cookieValue);
}
removeAllItemsFromCookies().catch((error) => {
  console.log(error);
});
