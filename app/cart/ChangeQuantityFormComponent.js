'use client';

import { useState } from 'react';
import { setQuantityInCookies } from './ChangeQuantityFormAction';
import styles from './page.module.scss';

export default function AddToCartFormComponent(props) {
  const [quantityValue, setQuantityValue] = useState(props.quantity);

  return (
    <form className={styles.forms}>
      <legend>Ticket {props.name}</legend>
      <label htmlFor="quantity">Anzahl:</label>
      <input
        id="quantity"
        type="number"
        pattern="[0-9]*"
        value={quantityValue}
        min="1"
        onChange={(event) => {
          if (props.singleProductID) {
            setQuantityValue(event.currentTarget.value);
          }
          setQuantityInCookies(
            props.singleProductID,
            event.currentTarget.value,
          ).catch((error) => {
            console.log(error);
          });
        }}
      />
      {/*
      <button
        className={styles.primarybutton}
        data-test-id="product-add-to-cart"
        formAction={async () => {
          await setQuantityInCookies(props.singleProductID, quantityValue);
        }}
      >
        Ticketanzahl ändern
      </button>
*/}
    </form>
  );
}
