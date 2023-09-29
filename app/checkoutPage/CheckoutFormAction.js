'use server';

import { cookies } from 'next/headers';

export async function setCookiesToZero() {
  await cookies().set('cart', []);
}

setCookiesToZero().catch((error) => {
  console.log(error);
});
