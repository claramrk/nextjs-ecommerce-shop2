'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';
import styles from './page.module.scss';

export default function CartRemoveButton() {
  return (
    <button
      className={styles.primarybutton}
      formAction={async () => await removeAllItemsFromCookies()}
    >
      Ticket entfernen
    </button>
  );
}
