'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';
import styles from './page.module.scss';

export default function CartRemoveAllButton(props) {
  console.log(props);
  return (
    <button
      className={styles.primarybutton}
      data-test-id={`cart-product-remove-${props.singleProductID}`}
      formAction={async () =>
        await removeAllItemsFromCookies(props.singleProductID)
      }
    >
      Alle Tickets entfernen
    </button>
  );
}
