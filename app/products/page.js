import '../../database/products';
import './page.scss';
import Link from 'next/link';
import { getProductsSQL } from '../../database/products';
import TotalPriceAndQuantity from '../cart/TotalPriceAndQuantityComponent';
import TicketComponent from './TicketComponent';

export const metadata = {
  title: 'Home',
  description: 'This is Claras e-commerce shop',
};

export default async function Products() {
  const productsFromDatabase = await getProductsSQL();

  return (
    <div className="shoppage">
      <h1 className="necessary">Tickets</h1>
      <div className="productlist">
        {productsFromDatabase.map((p) => {
          return (
            <Link
              href={`/products/${p.id}`}
              data-test-id={`product-${p.id}`}
              key={`product-${p.id}`}
            >
              <TicketComponent src={p.image} name={p.name} price={p.price} />
            </Link>
          );
        })}
      </div>
      <TotalPriceAndQuantity />
    </div>
  );
}
