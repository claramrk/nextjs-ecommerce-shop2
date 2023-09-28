import '/Users/claramrkos/projects/nextjs-ecommerce-shop2/database/products.js';
import { getProducts } from '/Users/claramrkos/projects/nextjs-ecommerce-shop2/database/products.js';
import Link from 'next/link';

export const metadata = {
  title: 'Home',
  description: 'This is Claras e-commerce shop',
};

const productsFromDatabase = getProducts();

export default function Home() {
  return (
    <main className="main">
      <div className="shoppage">
        <div className="background" />
        <h1 className="h1Title">Shoppage</h1>
        {productsFromDatabase.map((p) => {
          return (
            <Link
              href={`/${p.id}`}
              data-test-id={`product-${p.id}`}
              key={`product-${p.id}`}
            >
              <div className="cardBlog1">
                <div className="content">
                  <img
                    className="productImage"
                    src={p.image}
                    height={100}
                    alt="ProductImage"
                  />
                  <h2 className="producttitle}">{p.name}</h2>
                  <p className="seeMore}">{p.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
