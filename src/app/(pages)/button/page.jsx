'use client';

import Bell from '@/components/Buttons/Bell/Bell';
import Explore from '@/components/Buttons/Explore/Explore';
import FormButton from '@/components/Buttons/FormButton/FormButton';
import CarouselItem from '@/components/CarouselItem/CarouselItem';
import styles from './page.module.scss';

const data = [
  { id: 1, title: 'Explore', component: <Explore /> },
  { id: 2, title: 'Bell', component: <Bell /> },
  { id: 3, title: 'Form button', component: <FormButton /> },
];

const Button = () => {
  return (
    <section className={styles.homeContainer}>
      <CarouselItem data={data} />
    </section>
  );
};

export default Button;
