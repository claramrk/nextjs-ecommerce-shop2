import Link from 'next/link';
import { getProductSQLById } from '../../database/products';
import TicketComponent from '../products/TicketComponent';
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
          <Link href="/cart" data-test-id="cart-link">
            <button className={styles.primarybutton}>
              Einkaufswagen ansehen
            </button>
          </Link>
        </div>
      </div>
      <Link href="/products" data-test-id="cart-link">
        <button className={styles.primarybutton}>
          Zurück zu allen Tickets
        </button>
      </Link>
      <br />
      <br />
    </>
  );
}
