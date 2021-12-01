import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);
// Import Swiper styles
const SlideProduct = ({product}) => {
  return (
    <>
    <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  
  <div className="maincontent-area">
      <div className="container">
        
        <div className="row">
          {product && product.map((item, index) => {
            return (
                <SwiperSlide key={index} >
              <div  >
                <div className="single-product"  >
                  <div className="product-f-image">
                    <img src={item.avatar} alt=""  style={{height:'240',width: '200'}}/>
                    <div className="product-hover">
                      
                      <Link to={"/product/"+`${item.id}`} className="view-details-link"><i className="fa fa-link" /> See details  </Link>
                    </div>
                  </div>
                  <h2><Link to={`product/${item.id}`}>{item.name} </Link></h2> 
                  <div className="product-carousel-price">
                    <ins>${item.price}</ins> 
                  </div>
                </div>
              </div>
              </SwiperSlide>
            );
          })}



        </div>
      </div>
    </div>
  </Swiper>
    </>

  );
}
export default SlideProduct;