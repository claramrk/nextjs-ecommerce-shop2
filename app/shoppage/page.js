import '/Users/claramrkos/projects/nextjs-ecommerce-shop2/database/products.js';
import '/Users/claramrkos/projects/nextjs-ecommerce-shop2/app/shoppage/page.scss';
import { getProducts } from '/Users/claramrkos/projects/nextjs-ecommerce-shop2/database/products.js';
import Image from 'next/image';
import Link from 'next/link';
import TicketComponent from './TicketComponent';

export const metadata = {
  title: 'Home',
  description: 'This is Claras e-commerce shop',
};

const productsFromDatabase = getProducts();

export default function Home() {
  return (
    <div className="shoppage">
      <div className="background" />
      <div className="productlist">
        {productsFromDatabase.map((p) => {
          return (
            <Link
              href={`/${p.id}`}
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
    </div>
  );
}
