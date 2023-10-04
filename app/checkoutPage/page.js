import CheckoutPageFormComponent from './CheckoutFormComponent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'This is Claras e-commerce shop',
};

export default function CheckoutPage() {
  return (
    <div className={styles.checkoutPage}>
      <h1 className={styles.h1}>Confirm Order</h1>
      <div className={styles.inputAll}>
        <CheckoutPageFormComponent />
      </div>
    </div>
  );
}
