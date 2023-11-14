'use client';
import { removeItemFromCookies } from './CartRemoveAction';
import styles from './page.module.scss';

export default function CartRemoveButton(props) {
  return (
    <button
      onClick={async (event) => {
        event.preventDefault();
        await removeItemFromCookies(props.singleProductID).catch((error) => {
          console.log(error);
        });
      }}
      className={styles.primarybutton}
      data-test-id={`cart-product-remove-${props.singleProductID}`}
      style={{ backgroundColor: '#e0b4b4' }}
    >
      Ticket entfernen
    </button>
  );
}
