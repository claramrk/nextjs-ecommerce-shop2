import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.shoppage}>
        <div className={styles.background} />
        <div className={styles.h1Title}>h1 title</div>
        <div className={styles.cardBlog1}>
          <div className={styles.content}>
            <div className={styles.background1} />
            <div className={styles.producttitle}>Product 1</div>
            <div className={styles.seeMore}>See more!</div>
          </div>
          <div className={styles.productImage}>
            <div className={styles.rectangle} />
            <div className={styles.productImageChild} />
          </div>
        </div>
      </div>
    </main>
  );
}
