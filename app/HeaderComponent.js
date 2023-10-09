import { cookies } from 'next/headers';
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
    <div className={styles.header}>
      <div>
        <Link href="../">
          <b className={styles.logo}>Hermannshöhle</b>
        </Link>
      </div>
      <div className={styles.navsection}>
        <div className={styles.primarybutton}>
          <a href="/products" data-test-id="products-link">
            Tickets
          </a>
        </div>

        <Link href="/cart" data-test-id="cart-link">
          <div className={styles.primarybutton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
              <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
              <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
              <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
            </svg>
          </div>
        </Link>
        <div className={styles.currentcarttotalellipse}>
          <div className={styles.currentcartitemno} data-test-id="cart-count">
            {cartCookie ? sumQuantity() : '0'}
          </div>
        </div>
      </div>
    </div>
  );
}
