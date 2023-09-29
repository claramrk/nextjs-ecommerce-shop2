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
        <form className="checkout-form">
          <div className="Shipping Information">
            <h2>Shipping Information</h2>

            <div className="FirstName">
              <label htmlFor="FirstName">First Name:</label>
              <input
                className="FirstName"
                data-test-id="checkout-first-name"
                required
              />
            </div>
            <div className="LastName">
              <label htmlFor="LastName">First Name:</label>
              <input
                className="LastName"
                data-test-id="checkout-last-name"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input className="email" data-test-id="checkout-email" required />
            </div>
            <div className="address">
              <label htmlFor="address">Address:</label>
              <input
                className="address"
                data-test-id="checkout-address"
                required
              />
            </div>
            <div className="city">
              <label htmlFor="city">City:</label>
              <input className="city" data-test-id="checkout-city" required />
            </div>
            <div className="postal-code">
              <label htmlFor="postal-code">Postal Code:</label>
              <input
                className="postal-code"
                data-test-id="checkout-postal-code"
                required
              />
            </div>
            <div className="country">
              <label htmlFor="country">Country:</label>
              <input
                className="country"
                data-test-id="checkout-country"
                required
              />
            </div>
          </div>
          <div className="payment-information">
            <h2>Payment Information</h2>
            <div className="credit-card">
              <label htmlFor="credit-card">Credit-card:</label>
              <input
                className="credit-card"
                data-test-id="checkout-credit-card"
                required
              />
            </div>
            <div className="expiration-date">
              <label htmlFor="expiration-date">Expiration-date:</label>
              <input
                className="expiration-date"
                data-test-id="checkout-expiration-date"
                required
              />
            </div>
            <div className="security-code">
              <label htmlFor="security-code">Security-code:</label>
              <input
                className="security-code"
                data-test-id="checkout-security-code"
                required
              />
            </div>
          </div>
          <div className="confirm-order">
            <h2>Confirm your Order</h2>
            <Link
              href="/thankYouPage"
              data-test-id="checkout-confirm-order"
              className="NEEDSTOBEABUTTON"
            >
              <div className="buttonSecondary">
                <button className="cartbutton">Confirm Order</button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
