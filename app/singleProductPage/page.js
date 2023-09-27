import styles from './page.module.scss';

export const metadata = {
  title: 'Product',
  description: 'This is Claras e-commerce shop',
};

export default function SingleProductPage() {
  return (
    <div className={styles.singleproductpage}>
      <div className={styles.background} />
      <div className={styles.image}>
        <div className={styles.background1} />
      </div>
      <div className={styles.productdescriptiontemplate}>
        <div className={styles.buttonPrimary}>
          <div className={styles.background2} />
          <div className={styles.text}>Add to Cart</div>
        </div>
        <div className={styles.quantityinput} />
        <div className={styles.defaultinputone}>1</div>
        <div className={styles.quantitylabel}>Quantity</div>
        <div className={styles.price}>1234444</div>
        <div className={styles.productdescription}>Description</div>
        <div className={styles.h1}>h1 Product name 1</div>
      </div>
    </div>
  );
}
