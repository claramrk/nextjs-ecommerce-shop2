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
              {/*   <div className="cardBlog">
                <div className="content">
                  <div className="imageframe">
                    <img
                      className="productImage"
                      src={p.image}
                      height={100}
                      alt="ProductImage"
                    />
                  </div>
                  <div className="Description">
                    <h2 className="producttitle">Ticket {p.name}</h2>
                    <p className="seeMore">{p.price}€</p>
                  </div>
                </div>
          </div> */}
              <TicketComponent src={p.image} name={p.name} price={p.price} />
            </Link>
          );
        })}
      </div>
      <TotalPriceAndQuantity />
    </div>
  );
}
