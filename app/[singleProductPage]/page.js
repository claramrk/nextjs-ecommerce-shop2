import { getProducts, getProductsByID } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Product',
  description: 'This is Claras e-commerce shop',
};

export default function SingleProductPage(props) {
  const singleProduct = getProductsByID(Number(props.params.singleProductPage));
  return (
    <div className={styles.singleproductpage}>
      <div className={styles.image}>
        <img
          src={singleProduct.image}
          alt="ProductImage"
          height="200"
          data-test-id="product-image"
        />
      </div>
      <div className={styles.productdescriptiontemplate}>
        <h1 className={styles.h1}>{`Ticket ${singleProduct.name}`}</h1>
        <p className={styles.price} data-test-id="product-price">
          {singleProduct.price}
        </p>
        <label htmlFor="Quantity" className={styles.quantitylabel}>
          Quantity
        </label>
        <input
          id="Quantity"
          className={styles.quantityinput}
          placeholder="1"
          data-test-id="product-quantity"
        />
        <button
          className={styles.buttonPrimary}
          data-test-id="product-add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
