'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';

export default function CartRemoveAllButton(props) {
  console.log(props);
  return (
    <button
      className="buttonSecondary"
      data-test-id={`cart-product-remove-${props.singleProductID}`}
      formAction={async () =>
        await removeAllItemsFromCookies(props.singleProductID)
      }
    >
      Remove All
    </button>
  );
}
