import Image from 'next/image';
import styles from './ImageGallery.module.scss';

import Mountains from '../../../../public/mountains-g2df2aab55_1280.jpg';
import Nature from '../../../../public/nature-g366445d4a_1280.jpg';
import Forest from '../../../../public/bg_my-first-lib.jpg';
import NatureForest from '../../../../public/nature-g77f434425_1280.jpg';

const ImageGallery = () => {
  return (
    <div className={styles.gallery}>
      <Image
        src={Mountains}
        alt="mountains"
        className={styles.imgGallery}
        width={350}
        height={350}
      />
      <Image
        src={Nature}
        alt="nature"
        className={styles.imgGallery}
        width={350}
        height={350}
      />
      <Image
        src={Forest}
        alt="forest"
        className={styles.imgGallery}
        width={350}
        height={350}
      />
      <Image
        src={NatureForest}
        alt="nature forest"
        className={styles.imgGallery}
        width={350}
        height={350}
      />
    </div>
  );
};

export default ImageGallery;
