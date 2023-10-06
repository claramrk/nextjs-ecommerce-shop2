import CheckoutPageFormComponent from './CheckoutFormComponent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'This is Claras e-commerce shop',
};

export default function CheckoutPage() {
  return (
    <div>
      <div className={styles.main}>
        <h1>Confirm Order</h1>
        <CheckoutPageFormComponent />
      </div>
    </div>
  );
}
