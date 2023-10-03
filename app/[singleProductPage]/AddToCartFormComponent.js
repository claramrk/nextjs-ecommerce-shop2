'use client';

import { useState } from 'react';
import { setQuantityInCookies } from './AddToCartFormAction';
import styles from './page.module.scss';

export default function AddToCartFormComponent(props) {
  const [quantityValue, setQuantityValue] = useState(1);

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  return (
    <form className={styles.forms}>
      <legend>Add to Cart</legend>
      <label htmlFor="quantity" className={styles.quantitylabel}>
        Quantity:
      </label>
      <input
        id="quantity"
        type="number"
        pattern="[0-9]*"
        className={styles.quantityinput}
        value={quantityValue}
        data-test-id="product-quantity"
        min="1"
        onChange={(event) => {
          setQuantityValue(event.currentTarget.value);
          preventMinus(event.currentTarget.value);
        }}
      />
      <button
        className={styles.primarybutton}
        data-test-id="product-add-to-cart"
        formAction={async () =>
          await setQuantityInCookies(props.singleProductID, quantityValue)
        }
      >
        Add to Cart
      </button>
    </form>
  );
}
