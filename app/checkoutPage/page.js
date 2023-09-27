import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'This is Claras e-commerce shop',
};

export default function CheckoutPage() {
  return (
    <div className={styles.checkoutpage}>
      <div className={styles.background} />
      <div className={styles.buttonPrimary}>
        <div className={styles.background1} />
        <div className={styles.text}>Confirm Order</div>
      </div>
      <div className={styles.input}>
        <div className={styles.input1} />
        <div className={styles.placeholder}>email</div>
      </div>
      <div className={styles.input2}>
        <div className={styles.input1} />
        <div className={styles.placeholder}>email</div>
      </div>
      <div className={styles.input4}>
        <div className={styles.input1} />
        <div className={styles.placeholder2}>password</div>
      </div>
      <div className={styles.checkoutform} />
      <div className={styles.h1}>Checkout</div>
    </div>
  );
}
