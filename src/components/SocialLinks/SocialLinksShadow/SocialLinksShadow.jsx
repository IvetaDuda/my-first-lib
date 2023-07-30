import styles from './SocialLinksShadow.module.scss';

const SocialLinksShadow = () => {
  return (
    <div className={styles.socialContainer}>
      <ul className={styles.social}>
        <li className={styles.iconContainer}>
          <a href="#" className={styles.iconLink}>
            <svg className={`${styles.icon} ${styles.facebook}`}>
              <use href="sprite.svg#icon-facebook2" />
            </svg>
          </a>
        </li>
        <li className={styles.iconContainer}>
          <a href="#" className={styles.iconLink}>
            <svg className={`${styles.icon} ${styles.instagram}`}>
              <use href="sprite.svg#icon-instagram2" />
            </svg>
          </a>
        </li>
        <li className={styles.iconContainer}>
          <a href="#" className={styles.iconLink}>
            <svg className={`${styles.icon} ${styles.telegram}`}>
              <use href="sprite.svg#icon-telegram2" />
            </svg>
          </a>
        </li>
        <li className={styles.iconContainer}>
          <a href="#" className={styles.iconLink}>
            <svg className={`${styles.icon} ${styles.twitter}`}>
              <use href="sprite.svg#icon-twitter2" />
            </svg>
          </a>
        </li>
        <li className={styles.iconContainer}>
          <a href="#" className={styles.iconLink}>
            <svg className={`${styles.icon} ${styles.linkedin}`}>
              <use href="sprite.svg#icon-linkedin2" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinksShadow;
