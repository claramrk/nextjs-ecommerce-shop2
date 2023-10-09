'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';
import styles from './page.module.scss';

export default function CartRemoveAllButton(props) {
  return (
    <button
      className={styles.primarybutton}
      data-test-id={`cart-product-remove-${props.singleProductID}`}
      formAction={async () =>
        await removeAllItemsFromCookies(props.singleProductID)
      }
      style={{ backgroundColor: '#e0b4b4' }}
    >
      Alle Tickets entfernen
    </button>
  );
}
