



// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import desktop from "../../Img/Desktop.png"
import desktop1 from "../../Img/Desktop.png"
import desktop2 from "../../Img/Desktop.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

export default () => {
   
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       
      <SwiperSlide><img src={desktop} alt="" /></SwiperSlide>
      <SwiperSlide><img src={desktop} alt="" /></SwiperSlide>
      <SwiperSlide><img src={desktop} alt="" /></SwiperSlide>
    </Swiper>
  );
};