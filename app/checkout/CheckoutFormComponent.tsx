'use client';
import { redirect } from 'next/navigation';
import { removeAllItemsFromCookies } from './CheckoutFormAction';
import styles from './page.module.scss';

export default function CheckoutPageFormComponent() {
  return (
    <form>
      <div>
        <h2>Lieferinformation</h2>

        <div>
          <label htmlFor="FirstName">Vorname:</label>
          <input
            className={styles.input}
            id="FirstName"
            data-test-id="checkout-first-name"
            required
          />
        </div>
        <div>
          <label htmlFor="LastName">Nachname:</label>
          <input
            className={styles.input}
            id="LastName"
            data-test-id="checkout-last-name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            id="email"
            data-test-id="checkout-email"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Addresse:</label>
          <input
            className={styles.input}
            id="address"
            data-test-id="checkout-address"
            required
          />
        </div>
        <div>
          <label htmlFor="city">Ort:</label>
          <input
            className={styles.input}
            id="city"
            data-test-id="checkout-city"
            required
          />
        </div>
        <div>
          <label htmlFor="postal-code">Postleitzahl:</label>
          <input
            className={styles.input}
            id="postal-code"
            data-test-id="checkout-postal-code"
            required
          />
        </div>
        <div>
          <label htmlFor="country">Land:</label>
          <input
            className={styles.input}
            id="country"
            data-test-id="checkout-country"
            required
          />
        </div>
      </div>
      <div>
        <h2>Zahlungsinformation</h2>
        <div>
          <label htmlFor="credit-card">Kreditkartennummer:</label>
          <input
            className={styles.input}
            id="credit-card"
            data-test-id="checkout-credit-card"
            required
          />
        </div>
        <div>
          <label htmlFor="expiration-date">Ablaufdatum:</label>
          <input
            className={styles.input}
            id="expiration-date"
            data-test-id="checkout-expiration-date"
            required
          />
        </div>
        <div>
          <label htmlFor="security-code">CVV/CVC:</label>
          <input
            className={styles.input}
            id="security-code"
            data-test-id="checkout-security-code"
            required
          />
        </div>
      </div>
      <div>
        <h2>Bestellung bestätigen</h2>
        <button
          data-test-id="checkout-confirm-order"
          className={styles.primarybutton}
          formAction={async () => {
            await removeAllItemsFromCookies();
            redirect('/thankYou');
          }}
        >
          Tickets bestellen
        </button>
      </div>
    </form>
  );
}
