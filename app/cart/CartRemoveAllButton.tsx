'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';
import styles from './page.module.scss';

export default function CartRemoveAllButton() {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await removeAllItemsFromCookies().catch((error) => {
          console.log(error);
        });
      }}
    >
      <button
        className={styles.primarybutton}
        style={{ backgroundColor: '#e0b4b4' }}
      >
        Alle Tickets entfernen
      </button>
    </form>
  );
}
