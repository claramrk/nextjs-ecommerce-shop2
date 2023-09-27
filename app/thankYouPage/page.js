import styles from './page.module.scss';

export default function ThankYouPage() {
  return (
    <div className={styles.thankyoupage}>
      <div className={styles.background} />
      <div className={styles.buttonPrimary}>
        <div className={styles.background1} />
        <div className={styles.text}>Go back to Homepage</div>
      </div>
      <div className={styles.h1}>Thank you for your order</div>
    </div>
  );
}
