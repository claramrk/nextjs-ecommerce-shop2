import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'ThankYou',
  description: 'This is Claras e-commerce shop',
};

export default function thankYou() {
  return (
    <div className="thankyoupage">
      <h1 className="h1">Danke für deine Bestellung!</h1>
      <div className={styles.primarybutton}>
        <Link
          href="/products"
          data-test-id="checkout-confirm-order"
          className="NEEDSTOBEABUTTON"
        >
          Zurück zum Ticketshop{' '}
        </Link>
      </div>
    </div>
  );
}
