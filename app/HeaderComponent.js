import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeaderComponent.module.scss';

export default function HeaderComponent() {
  const cartCookie = cookies().get('cart')?.value;
  const parsedCartCookie =
    !cartCookie || JSON.parse(cartCookie).length === 0
      ? []
      : JSON.parse(cartCookie);

  function sumQuantity() {
    const sumTotal = parsedCartCookie.reduce((accumulator, object) => {
      return accumulator + Number(object.quantity);
    }, 0);
    return sumTotal;
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logosection}>
          <Link href="/shoppage">
            <b className={styles.logo}>Hermannshöhle</b>
          </Link>
        </div>
        <div className={styles.navsection}>
          <div className={styles.primarybutton}>
            <a href="/shoppage" data-test-id="products-link">
              Tickets
            </a>
          </div>

          <Link href="/cartPage" data-test-id="cart-link">
            <div className={styles.primarybutton}>Cart</div>
          </Link>
          <div className={styles.currentcarttotalellipse}>
            <div className={styles.currentcartitemno} data-test-id="cart-count">
              {cartCookie ? sumQuantity() : '0'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
