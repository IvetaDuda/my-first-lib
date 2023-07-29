import styles from './Explore.module.scss';

const Explore = () => {
  return (
    <button className={styles.btn}>
      Explore
      <span className={styles.iconRight} />
      <span className={`${styles.iconRight} ${styles.after}`} />
    </button>
  );
};

export default Explore;
