'use server';
import { cookies } from 'next/headers';

export async function setQuantityInCookies(value) {
  await cookies().set('cart', value);
}
