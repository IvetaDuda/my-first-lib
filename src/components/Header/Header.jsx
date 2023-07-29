import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Link className={styles.headerLinks} href="/">
          Головна
        </Link>
        <Link className={styles.headerLinks} href="/button">
          Кнопки
        </Link>
        <Link className={styles.headerLinks} href="/social">
          Навігація
        </Link>
        <Link className={styles.headerLinks} href="/animation">
          Анімація
        </Link>
      </div>
    </header>
  );
};

export default Header;
