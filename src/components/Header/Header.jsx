import Link from 'next/link';
import styles from './Header.module.scss';
import ChangeTheme from '../ChangeTheme/ChangeTheme';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={` ${styles.headerContainer} container`}>
        <div className={styles.headerLinkContainer}>
          <Link className={styles.headerLinks} href="/">
            Home
          </Link>
          <Link className={styles.headerLinks} href="/button">
            Button
          </Link>
          <Link className={styles.headerLinks} href="/social">
            Link
          </Link>
          <Link className={styles.headerLinks} href="/animation">
            Animation
          </Link>
        </div>

        <ChangeTheme />
      </div>
    </header>
  );
};

export default Header;
