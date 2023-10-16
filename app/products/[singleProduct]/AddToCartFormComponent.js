'use client';

// import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { setQuantityInCookies } from './AddToCartFormAction.tsx';
import styles from './page.module.scss';

export default function AddToCartFormComponent(props) {
  const [quantityValue, setQuantityValue] = useState(1);

  return (
    <form
      className={styles.forms}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <legend>Zum Einkaufswagen hinzufügen</legend>
      <label htmlFor="quantity">Anzahl:</label>
      <input
        id="quantity"
        type="number"
        pattern="[1-9]*"
        className={styles.input}
        value={quantityValue}
        data-test-id="product-quantity"
        min={1}
        onChange={(event) => {
          setQuantityValue(Number(event.currentTarget.value));
        }}
      />
      <button
        className={styles.primarybutton}
        data-test-id="product-add-to-cart"
        formAction={async () => {
          await setQuantityInCookies(props.singleProductID, quantityValue);
        }}
      >
        Ticket hinzufügen
      </button>
    </form>
  );
}
