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
        <img src={singleProduct.image} alt="ProductImage" height="200" />
      </div>
      <div className={styles.productdescriptiontemplate}>
        <h1 className={styles.h1}>{`Ticket ${singleProduct.name}`}</h1>
        <div className={styles.quantityinput} />
        <label htmlFor="Quantity" className={styles.quantitylabel}>
          Quantity
        </label>
        <input id="Quantity" className={styles.price} placeholder="1" />
        <button className={styles.buttonPrimary}>Add to Cart</button>
      </div>
    </div>
  );
}
