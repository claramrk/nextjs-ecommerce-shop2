import styles from './page.module.scss';

export const metadata = {
  title: 'Home',
  description: 'This is Claras e-commerce shop',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.shoppage}>
        <div className={styles.background} />
        <h1 className={styles.h1Title}>Shoppage</h1>
        <a href="./#" data-test-id="product-<product id>">
          <div className={styles.cardBlog1}>
            <div className={styles.content}>
              <div className={styles.background1} />
              <h2 className={styles.producttitle}>Product 1</h2>
              <p className={styles.seeMore}>See more!</p>
            </div>
            <img
              className={styles.productImage}
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg"
              width={200}
              height={100}
              alt="parrot"
            />
          </div>
        </a>
      </div>
    </main>
  );
}
