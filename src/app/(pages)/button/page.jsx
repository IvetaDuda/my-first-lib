'use client';

import styles from './page.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bell from '@/components/Buttons/Bell/Bell';
import Explore from '@/components/Buttons/Explore/Explore';

const data = [
  { id: 1, component: <Explore /> },
  { id: 2, component: <Bell /> },
];

const Button = () => {
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

export default Button;
