'use client';

import Globe from '@/components/StartPage/Globe/Globe';
import styles from './page.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CroppedPicture from '@/components/StartPage/CroppedPicture/croppedPicture';
import ImageGallery from '@/components/StartPage/ImageGallery/ImageGallery';
import ImageBorder from '@/components/StartPage/ImageBorder/ImageBorder';

const data = [
  { id: 1, component: <ImageGallery /> },
  { id: 2, component: <CroppedPicture /> },
  { id: 3, component: <ImageBorder /> },
  { id: 4, component: <Globe /> },
];

const StartPage = () => {
  return (
    <section className={styles.homeContainer}>
      <Carousel interval={null}>
        {data.map(({ id, component }) => (
          <Carousel.Item key={id}>
            <div className={styles.animate}>
              <Carousel.Caption className={styles.carouselCaption}>
                <div className={styles.animateContainer}>{component}</div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default StartPage;
