'use server';
import { cookies } from 'next/headers';

export async function setQuantityInCookies(singleProductID, quantityValue) {
  await cookies().set('cart', quantityValue);
}
