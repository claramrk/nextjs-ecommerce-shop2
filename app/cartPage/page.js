import styles from '/page.module.scss';

export default function CartPage() {
  return (
    <div className={styles.cartpage}>
      <h1 className={styles.cart}>Cart</h1>

      <button className={styles.itemsinCart}> </button>

      <div className={styles.ProductCard}>
        <div className={styles.title}>Product Name</div>

        <p className={styles.subtitle}>{`Quantity: `}</p>
        <div className={styles.subtotalP1}>Subtotal:</div>
        <h2>Total Price:</h2>
        <p>0</p>
        <button className={styles.buttonSecondary}>Remove</button>
      </div>

      <div className={styles.totalpriceandquantity}>
        <h2>Total Price:</h2>
        <p>0</p>
        <div className={styles.quantity}>{`Quantity: `}</div>
        <button className={styles.buttonSecondary}>Checkout!</button>
      </div>
    </div>
  );
}
