'use client';

import { useState } from 'react';
import { setQuantityInCookies } from './ChangeQuantityFormAction';
import styles from './page.module.scss';

export default function AddToCartFormComponent(props) {
  const [quantityValue, setQuantityValue] = useState(props.quantity);

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };

  console.log(props);

  return (
    <form className={styles.forms}>
      <legend>Zum Einkaufswagen hinzufügen</legend>
      <label htmlFor="quantity">Anzahl:</label>
      <input
        id="quantity"
        type="number"
        pattern="[0-9]*"
        className={styles.input}
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
        formAction={async () => {
          await setQuantityInCookies(props.singleProductID, quantityValue);
        }}
      >
        Ticketanzahl ändern
      </button>
    </form>
  );
}
