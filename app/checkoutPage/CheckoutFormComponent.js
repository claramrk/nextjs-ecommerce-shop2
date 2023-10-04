'use client';
import { redirect } from 'next/navigation';
import { removeAllItemsFromCookies } from './CheckoutFormAction';
import styles from './page.module.scss';

export default function CheckoutPageFormComponent() {
  return (
    <form className={styles.checkoutform}>
      <div className={styles.ShippingInformation}>
        <h2>Shipping Information</h2>

        <div className={styles.FirstName}>
          <label htmlFor="FirstName">First Name:</label>
          <input
            className={styles.input}
            data-test-id="checkout-first-name"
            required
          />
        </div>
        <div className={styles.LastName}>
          <label htmlFor="LastName">First Name:</label>
          <input
            className={styles.input}
            data-test-id="checkout-last-name"
            required
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            data-test-id="checkout-email"
            required
          />
        </div>
        <div className={styles.address}>
          <label htmlFor="address">Address:</label>
          <input
            className={styles.input}
            data-test-id="checkout-address"
            required
          />
        </div>
        <div className={styles.city}>
          <label htmlFor="city">City:</label>
          <input
            className={styles.input}
            data-test-id="checkout-city"
            required
          />
        </div>
        <div className={styles.postalcode}>
          <label htmlFor="postal-code">Postal Code:</label>
          <input
            className={styles.input}
            data-test-id="checkout-postal-code"
            required
          />
        </div>
        <div className={styles.country}>
          <label htmlFor="country">Country:</label>
          <input
            className={styles.input}
            data-test-id="checkout-country"
            required
          />
        </div>
      </div>
      <div className={styles.paymentinformation}>
        <h2>Payment Information</h2>
        <div className={styles.creditcard}>
          <label htmlFor="credit-card">Credit-card:</label>
          <input
            className={styles.input}
            data-test-id="checkout-credit-card"
            required
          />
        </div>
        <div className={styles.expirationdate}>
          <label htmlFor="expiration-date">Expiration-date:</label>
          <input
            className={styles.input}
            data-test-id="checkout-expiration-date"
            required
          />
        </div>
        <div className={styles.securitycode}>
          <label htmlFor="security-code">Security-code:</label>
          <input
            className={styles.input}
            data-test-id="checkout-security-code"
            required
          />
        </div>
      </div>
      <div className={styles.confirmorder}>
        <h2>Confirm your Order</h2>
        <button
          className={styles.primarybutton}
          formAction={async () => {
            await removeAllItemsFromCookies();
            redirect('/thankYouPage');
          }}
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
}
