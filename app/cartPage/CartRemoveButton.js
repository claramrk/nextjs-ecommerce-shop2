'use client';

import { removeAllItemsFromCookies } from './CartRemoveAllAction';
import styles from './page.module.scss';

export default function CartRemoveButton(props) {
  console.log(props);
  return (
    <button
      className={styles.primarybutton}
      formAction={async () => await removeAllItemsFromCookies()}
    >
      Remove Item
    </button>
  );
}
