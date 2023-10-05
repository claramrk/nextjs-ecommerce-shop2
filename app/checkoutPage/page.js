import CheckoutPageFormComponent from './CheckoutFormComponent';

export const metadata = {
  title: 'Products',
  description: 'This is Claras e-commerce shop',
};

export default function CheckoutPage() {
  return (
    <div>
      <h1>Confirm Order</h1>
      <div>
        <CheckoutPageFormComponent />
      </div>
    </div>
  );
}
