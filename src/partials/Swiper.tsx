// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import image1 from '../components/images/1.png'
import image2 from '../components/images/2.png'
import image3 from '../components/images/3.png'
import image4 from '../components/images/4.png'
import image5 from '../components/images/5.png'
import image6 from '../components/images/6.png'
import image7 from '../components/images/7.png'
import image8 from '../components/images/8.png'
import image9 from '../components/images/9.png'
import image10 from '../components/images/10.png'

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
        <SwiperSlide>
          <img src={image6} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image10} alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
