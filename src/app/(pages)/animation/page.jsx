'use client';

import Globe from '@/components/StartPage/Globe/Globe';
import CroppedPicture from '@/components/StartPage/CroppedPicture/croppedPicture';
import ImageGallery from '@/components/StartPage/ImageGallery/ImageGallery';
import ImageBorder from '@/components/StartPage/ImageBorder/ImageBorder';
import CarouselItem from '@/components/CarouselItem/CarouselItem';
import styles from './page.module.scss';

const data = [
  { id: 1, title: 'Image gallery', component: <ImageGallery /> },
  { id: 2, title: 'Cropped picture', component: <CroppedPicture /> },
  { id: 3, title: 'Image border', component: <ImageBorder /> },
  { id: 4, title: 'Globe', component: <Globe /> },
];

const StartPage = () => {
  return (
    <section className={styles.homeContainer}>
      <CarouselItem data={data} />
    </section>
  );
};

export default StartPage;

// 'use client';

// import Globe from '@/components/StartPage/Globe/Globe';
// import styles from './page.module.scss';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CroppedPicture from '@/components/StartPage/CroppedPicture/croppedPicture';
// import ImageGallery from '@/components/StartPage/ImageGallery/ImageGallery';
// import ImageBorder from '@/components/StartPage/ImageBorder/ImageBorder';

// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';

// const data = [
//   { id: 1, title: 'Image gallery', component: <ImageGallery /> },
//   { id: 2, title: 'Cropped picture', component: <CroppedPicture /> },
//   { id: 3, title: 'Image border', component: <ImageBorder /> },
//   { id: 4, title: 'Globe', component: <Globe /> },
// ];

// const StartPage = () => {
//   const [props, setProps] = useState('');
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     if (theme === 'light') {
//       return setProps('dark');
//     } else {
//       return setProps('light');
//     }
//   }, [theme]);
//   return (
//     <section className={styles.homeContainer}>
//       <Carousel interval={null} variant={props}>
//         {data.map(({ id, title, component }) => (
//           <Carousel.Item key={id}>
//             <div className={styles.animate}>
//               <Carousel.Caption className={styles.carouselCaption}>
//                 <div className={styles.animateContainer}>
//                   <div className={styles.textContainer}>
//                     <h2 className={styles.text}>{title}</h2>
//                   </div>
//                   {component}
//                 </div>
//               </Carousel.Caption>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </section>
//   );
// };

// export default StartPage;
