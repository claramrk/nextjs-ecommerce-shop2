import styles from './HeaderComponent.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.background2} />
      <div className={styles.buttonSecondary}>
        <div className={styles.background3} />
        <div className={styles.cartbutton}>Cart</div>
      </div>
      <b className={styles.logo}>E.commerce Shop</b>
      <div className={styles.currentcarttotalellipse} />
      <div className={styles.currentcartitemno}>3</div>
    </div>
  );
}
