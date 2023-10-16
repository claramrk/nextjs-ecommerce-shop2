import { cookies } from 'next/headers';
import { parseJson } from './parsejson';

export type ParsedCookie = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number | undefined;
};

export async function getParsedCookie() {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || parseJson(cartCookie).length === 0
      ? []
      : parseJson(cartCookie);
  return await parsedCartCookie;
}
