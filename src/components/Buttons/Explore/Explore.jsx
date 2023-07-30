import styles from './Explore.module.scss';

const Explore = () => {
  return (
    <div className={styles.explore}>
      <button className={styles.btn}>
        Explore
        <span className={styles.iconRight} />
        <span className={`${styles.iconRight} ${styles.after}`} />
      </button>
    </div>
  );
};

export default Explore;
