import { getProductsByID } from '/Users/claramrkos/projects/nextjs-ecommerce-shop2/database/products.js';
import Link from 'next/link';
import TicketComponent from '../shoppage/TicketComponent';
import AddToCartFormComponent from './AddToCartFormComponent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Product',
  description: 'This is Claras e-commerce shop',
};

export default function SingleProductPage(props) {
  const singleProduct = getProductsByID(Number(props.params.singleProductPage));
  console.log(singleProduct);
  return (
    <>
      <div class={styles.main}>
        <div classname={styles.imagesection}>
          <TicketComponent
            src={singleProduct?.image}
            name={singleProduct?.name}
            price={singleProduct?.price}
          />
        </div>
        <div className={styles.formsection}>
          <AddToCartFormComponent singleProductID={singleProduct.id} />
          <Link href="/cartPage" data-test-id="cart-link">
            <button className={styles.primarybutton}>
              View all products in Cart
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
