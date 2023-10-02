'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';

export default function CartRemoveButton(props) {
  console.log(props);
  return (
    <button
      className="buttonSecondary"
      formAction={async () => await removeAllItemsFromCookies()}
    >
      Remove Item
    </button>
  );
}
