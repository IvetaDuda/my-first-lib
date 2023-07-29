import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.home}>
        <div className={styles.context}>
          <p>my</p>
          <p>first</p>
          <p>Library</p>
          <span className={styles.text}>hover</span>
          <span className={styles.text}>animation</span>
        </div>
      </div>
    </section>
  );
}
