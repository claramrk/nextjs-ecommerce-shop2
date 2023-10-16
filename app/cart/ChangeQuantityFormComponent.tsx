'use client';

import { useState } from 'react';
import { changeQuantityInCookies } from './ChangeQuantityFormAction';
import styles from './page.module.scss';

type Props = {
  singleProductID: number;
  name: string;
  quantity: number;
};

export default function ChangeQuantityCartFormComponent(props: Props) {
  const [quantityValue, setQuantityValue] = useState(Number(props.quantity));
  const [submitInfo, setSubmitInfo] = useState('');

  return (
    <form
      className={styles.forms}
      onSubmit={(event) => {
        event.preventDefault();
        changeQuantityInCookies(props.singleProductID, quantityValue).catch(
          (error) => {
            console.log(error);
          },
        );
        setSubmitInfo('');
      }}
    >
      <legend>Ticket {props.name}</legend>
      <label htmlFor="quantity">Anzahl:</label>
      <input
        className={styles.input}
        id="quantity"
        type="number"
        pattern="[1 - 9]*"
        value={quantityValue}
        min={1}
        onChange={(event) => {
          setQuantityValue(Number(event.currentTarget.value));
          setSubmitInfo('Press Enter to confirm');
        }}
      />

      <p style={{ color: 'green' }}>{submitInfo}</p>
    </form>
  );
}
