// Import Swiper styles
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../carousel/carou.css";
import img1 from "../../Img/header/pexels-anastasia-shuraeva-7278606.jpg";
import img2 from "../../Img/header/h1.png";
import img3 from "../../Img/header/Maskgroup.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{ delay: 6000 }}
    >
      <SwiperSlide className="upper_caro">
        <img src={img1} className="carousel" alt="" />
      </SwiperSlide>
      <SwiperSlide className="upper_caro">
        <img src={img2} className="carousel" alt="" />
      </SwiperSlide>
      <SwiperSlide className="upper_caro">
        <img src={img3} className="carousel" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
