import Image from 'next/image';
import styles from './ImageBorder.module.scss';
import Forest from '../../../../public/bg_my-first-lib.jpg';

const ImageBorder = () => {
  return (
    <Image
      src={Forest}
      alt="forest"
      className={styles.imgBorder}
      width={350}
      height={350}
    />
  );
};

export default ImageBorder;
