'use client';

import styles from './page.module.scss';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <section className={styles.homeContainer}>
      <div
        className={
          theme === 'dark'
            ? styles.home + ' ' + styles.homeDark
            : styles.home + ' ' + styles.homeLignt
        }
      >
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
