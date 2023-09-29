import CheckoutPageFormComponent from './CheckoutFormComponent';

export const metadata = {
  title: 'Products',
  description: 'This is Claras e-commerce shop',
};

export default function CheckoutPage() {
  return (
    <div className="checkoutPage">
      <h1 className="h1">Confirm Order</h1>
      <div className="inputAll">
        <CheckoutPageFormComponent />
      </div>
    </div>
  );
}
