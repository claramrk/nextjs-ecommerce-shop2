import Link from 'next/link';

export const metadata = {
  title: 'Products',
  description: 'This is Claras e-commerce shop',
};

export default function CheckoutPage() {
  return (
    <div className="checkoutPage">
      <h1 className="h1">Confirm Order</h1>
      <div className="inputAll">
        <div className="Shipping Information">
          <h2>Shipping Information</h2>

          <div className="FirstName">
            <label htmlFor="FirstName">First Name:</label>
            <input className="FirstName" data-test-id="checkout-first-name" />
          </div>
          <div className="LastName">
            <label htmlFor="LastName">First Name:</label>
            <input className="LastName" data-test-id="checkout-last-name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input className="email" data-test-id="checkout-email" />
          </div>
          <div className="address">
            <label htmlFor="address">Address:</label>
            <input className="address" data-test-id="checkout-address" />
          </div>
          <div className="city">
            <label htmlFor="city">City:</label>
            <input className="city" data-test-id="checkout-city" />
          </div>
          <div className="postal-code">
            <label htmlFor="postal-code">Postal Code:</label>
            <input
              className="postal-code"
              data-test-id="checkout-postal-code"
            />
          </div>
          <div className="country">
            <label htmlFor="country">Country:</label>
            <input className="country" data-test-id="checkout-country" />
          </div>
        </div>
        <div className="payment-information">
          <h2>Payment Information</h2>
          <div className="credit-card">
            <label htmlFor="credit-card">Credit-card:</label>
            <input
              className="credit-card"
              data-test-id="checkout-credit-card"
            />
          </div>
          <div className="expiration-date">
            <label htmlFor="expiration-date">Expiration-date:</label>
            <input
              className="expiration-date"
              data-test-id="checkout-expiration-date"
            />
          </div>
          <div className="security-code">
            <label htmlFor="security-code">Security-code:</label>
            <input
              className="security-code"
              data-test-id="checkout-security-code"
            />
          </div>
        </div>
      </div>
      <div className="confirm-order">
        <h2>Confirm your Order</h2>
        <Link href="/thankYouPage">
          <div className="buttonSecondary">
            <div className="background3" />
            <div className="cartbutton">Confirm Order</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
