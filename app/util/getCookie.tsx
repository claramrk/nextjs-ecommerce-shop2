import { cookies } from 'next/headers';
import { parseJson } from './parsejson';

export type ParsedCookie = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number | undefined;
};

export async function getJSONCookie() {
  const cartCookieOriginal = await cookies().get('cart')?.value;
  if (cartCookieOriginal !== undefined) {
    const cartCookie: object[] = [];
    return cartCookie;
  } else {
    const cartCookie = cartCookieOriginal;
    return cartCookie;
  }
}

export async function getParsedCookie() {
  const cartCookie = await cookies().get('cart')?.value;
  const parsedCartCookie =
    cartCookie || parseJson(cartCookie).length > 0 ? parseJson(cartCookie) : [];
  return await parsedCartCookie;
}
