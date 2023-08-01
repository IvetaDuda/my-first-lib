'use client';

import styles from './Loader.module.scss';

import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.LoadingContainer}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        visible={true}
        className={styles.loading}
      />
    </div>
  );
};

export default Loader;
