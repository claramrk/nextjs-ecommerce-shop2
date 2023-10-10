import TotalPriceAndQuantity from '../cart/TotalPriceAndQuantityComponent';
import CheckoutPageFormComponent from './CheckoutFormComponent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'This is Claras e-commerce shop',
};

export default function Checkout() {
  return (
    <div>
      <div className={styles.main}>
        <h1>Tickets bestellen</h1>
        <CheckoutPageFormComponent />
      </div>
      <TotalPriceAndQuantity />
    </div>
  );
}
