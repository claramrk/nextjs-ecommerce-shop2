import { getProductsByID } from '/Users/claramrkos/projects/nextjs-ecommerce-shop2/database/products.js';
import Link from 'next/link';
import AddToCartFormComponent from './AddToCartFormComponent';

export const metadata = {
  title: 'Product',
  description: 'This is Claras e-commerce shop',
};

export default function SingleProductPage(props) {
  const singleProduct = getProductsByID(Number(props.params.singleProductPage));
  return (
    <div className="singleproductpage">
      <div className="image">
        <img
          src={singleProduct?.image}
          alt="ProductImage"
          height="200"
          data-test-id="product-image"
        />
      </div>
      <div className="productdescriptiontemplate">
        <h1 className="h1">{`Ticket ${singleProduct?.name}`}</h1>
        <h3>Price:</h3>
        <p className="price" data-test-id="product-price">
          {singleProduct?.price}
        </p>
        <AddToCartFormComponent />
        <Link href="/cartPage" data-test-id="cart-link">
          <div className="buttonSecondary">
            <div className="cartbutton">View all products in Cart</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
