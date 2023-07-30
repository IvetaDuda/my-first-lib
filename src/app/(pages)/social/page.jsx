'use client';

import SocialLinksList from '@/components/SocialLinks/SocialLinksList/SocialLinksList';
import SocialLinksShadow from '@/components/SocialLinks/SocialLinksShadow/SocialLinksShadow';
import CarouselItem from '@/components/CarouselItem/CarouselItem';
import styles from './page.module.scss';

const data = [
  {
    id: 1,
    title: 'Social links',
    component: <SocialLinksList />,
  },
  { id: 2, title: 'Social links shadow', component: <SocialLinksShadow /> },
];

const SocialLinks = () => {
  return (
    <section className={styles.homeContainer}>
      <CarouselItem data={data} />
    </section>
  );
};

export default SocialLinks;
