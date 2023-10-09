'use client';
import { removeItemFromCookies } from './CartRemoveAction';
import styles from './page.module.scss';

export default function CartRemoveButton(props) {
  return (
    <button
      className={styles.primarybutton}
      data-test-id={`cart-product-remove-${props.singleProductID}`}
      formAction={async () =>
        await removeItemFromCookies(props.singleProductID)
      }
      style={{ backgroundColor: '#e0b4b4' }}
    >
      Ticket entfernen
    </button>
  );
}
