'use client';

import { removeItemFromCookies } from './CartRemoveAction';

export default function CartRemoveButton(props) {
  console.log(props);
  return (
    <button
      className="buttonSecondary"
      data-test-id={`cart-product-remove-${props.singleProductID}`}
      formAction={async () =>
        await removeItemFromCookies(props.singleProductID)
      }
    >
      Remove Test
    </button>
  );
}
