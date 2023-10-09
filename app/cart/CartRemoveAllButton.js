'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';
import styles from './page.module.scss';

export default function CartRemoveAllButton() {
  return (
    <button
      className={styles.primarybutton}
      formAction={async () => await removeAllItemsFromCookies()}
      style={{ backgroundColor: '#e0b4b4' }}
    >
      Alle Tickets entfernen
    </button>
  );
}
