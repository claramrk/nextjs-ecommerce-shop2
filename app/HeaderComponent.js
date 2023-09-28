import Link from 'next/link';
import styles from './HeaderComponent.module.scss';

export default function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.background2} />
      <div className={styles.cartbutton}>
        <a href="/shoppage" data-test-id="products-link">
          Products
        </a>
      </div>

      <Link href="/cartPage">
        <div className={styles.buttonSecondary}>
          <div className={styles.background3} />

          <div className={styles.cartbutton}>Cart</div>
        </div>
      </Link>
      <b className={styles.logo}>E.commerce Shop</b>
      <div className={styles.currentcarttotalellipse}>
        <div className={styles.currentcartitemno}>0</div>
      </div>
    </div>
  );
}
