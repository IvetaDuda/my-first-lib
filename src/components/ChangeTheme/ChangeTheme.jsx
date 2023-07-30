'use client';

import styles from './ChangeTheme.module.scss';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ChangeTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  {
  }
  return (
    // <select value={theme} onChange={(e) => setTheme(e.target.value)}>
    //   <option value="system">System</option>
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>
    <div className={styles.themeContainer}>
      {theme === 'dark' ? (
        <button className={styles.btn} onClick={() => setTheme('light')}>
          <svg className={`${styles.svgChange} ${styles.sun}`}>
            <use href="sprite.svg#icon-sun" />
          </svg>
        </button>
      ) : (
        <button className={styles.btn} onClick={() => setTheme('dark')}>
          <svg className={`${styles.svgChange} ${styles.moon}`}>
            <use href="sprite.svg#icon-moon-night" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChangeTheme;
