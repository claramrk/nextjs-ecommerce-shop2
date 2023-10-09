import Link from 'next/link';
import { getProductSQLById } from '../../../database/products';
import TicketComponent from '../TicketComponent';
import AddToCartFormComponent from './AddToCartFormComponent';
import styles from './page.module.scss';

export const metadata = {
  title: 'Product',
  description: 'This is Claras e-commerce shop',
};

export default async function SingleProduct(props) {
  const singleProduct = await getProductSQLById(
    Number(props.params.singleProduct),
  );
  return (
    <>
      <h1 className="notnecessary">Ticket {singleProduct?.name}</h1>
      <div className={styles.main}>
        <div>
          <TicketComponent
            src={singleProduct?.image}
            name={singleProduct?.name}
            price={singleProduct?.price}
          />
        </div>
        <div className={styles.formsection}>
          <AddToCartFormComponent singleProductID={singleProduct.id} />
        </div>
      </div>
      <Link href="/cart" data-test-id="cart-link">
        <button className={styles.primarybutton}>Einkaufswagen ansehen</button>
      </Link>
      <Link href="/products" data-test-id="cart-link">
        <button className={styles.primarybutton}>
          Zurück zu allen Tickets
        </button>
      </Link>
      <br />
      <br />
      <div className="necessary">
        <h3>Product Summary for Drone</h3>
        <img
          src={singleProduct?.image}
          height="10"
          data-test-id="product-image"
          alt="productimage-necessary"
        />
        <p className="necessary" data-test-id="product-price">
          {singleProduct?.price}
        </p>
      </div>
    </>
  );
}
