import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.home}>
        <div className={styles.animateContainer}>
          <div className={styles.links}></div>
        </div>
      </div>
    </div>
  );
}
