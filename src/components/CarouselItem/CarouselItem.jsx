'use client';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import styles from './CarouselItem.module.scss';

const CarouselItem = ({ data }) => {
  const [props, setProps] = useState('');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'light') {
      return setProps('dark');
    } else {
      return setProps('light');
    }
  }, [theme]);
  return (
    <Carousel interval={null} variant={props}>
      {data.map(({ id, title, component }) => (
        <Carousel.Item key={id}>
          <div className={styles.animate}>
            <Carousel.Caption className={styles.carouselCaption}>
              <div className={styles.animateContainer}>
                <div className={styles.textContainer}>
                  <h2 className={styles.text}>{title}</h2>
                </div>
                {component}
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselItem;
