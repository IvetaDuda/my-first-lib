import styles from './Bell.module.scss';

const Bell = () => {
  return (
    <div className={styles.bellContainer}>
      <svg className={styles.bell}>
        <use href="sprite.svg#icon-bell" />
      </svg>
    </div>
  );
};

export default Bell;
