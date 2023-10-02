'use server';

import { cookies } from 'next/headers';

export async function setCookiesToZero() {
  await cookies().delete('cart');
}

setCookiesToZero().catch((error) => {
  console.log(error);
});
