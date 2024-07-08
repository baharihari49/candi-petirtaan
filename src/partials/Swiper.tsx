// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../components/images/1.png'
import image2 from '../components/images/2.jpg'
import image3 from '../components/images/3.jpg'
import image4 from '../components/images/4.jpg'
import image5 from '../components/images/5.jpg'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperComponents() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper max-w-2xl aspect-video">
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
