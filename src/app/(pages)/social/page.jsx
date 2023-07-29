'use client';

import SocialLinksList from '@/components/SocialLinks/SocialLinksList/SocialLinksList';
import styles from './page.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {
    id: 1,
    component: <SocialLinksList />,
  },
  { id: 2, component: 'BUTTON' },
];

const SocialLinks = () => {
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

export default SocialLinks;
