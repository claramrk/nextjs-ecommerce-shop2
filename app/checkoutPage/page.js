import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
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
