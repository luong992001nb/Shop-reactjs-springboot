import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

SwiperCore.use([Pagination, Navigation]);
// Import Swiper styles
const SlideShow = () => {
  return (
    <>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 1500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
        <SwiperSlide><img src="https://i.imgur.com/ETVzCDr.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/LnZ2lyP.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/lt3Ftso.jpg"/></SwiperSlide>
      </Swiper>
    </>

  );
}
export default SlideShow;