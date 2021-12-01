import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
   Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Product = ({ product, category }) => {
  return (
    <>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Shop</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maincontent-area">

        <div className="container">
          <h1>Category</h1>
        </div>
        <div className="row">

          <Swiper spaceBetween={30} pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper">


            {category && category.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to={`${item.id}/category`} >
                  <button style={{ height: '70px', width: '80px', margin: "40px" }} type="button" class="btn btn-outline-secondary">
                    {item.name}
                  </button>
                  </Link>

                </SwiperSlide>);
            })}
          </Swiper>
        </div>


        <div className="container">
          <div className="row">
            {product && product.map((item, index) => {
              return (
                <div key={index} className="col-md-3 col-sm-6">
                  <div className="single-product" >
                    <div className="product-f-image">
                      <img src={item.avatar} alt="" style={{ height: '250px', width: '263' }} />
                      <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                        <Link to={`${item.id}`} className="view-details-link"><i className="fa fa-link" /> See details  </Link>
                      </div>
                    </div>
                    <h2><Link to={`${item.id}`}>{item.name} </Link></h2>
                    <div className="product-carousel-price">
                      <ins>${item.price}</ins>
                    </div>
                  </div>
                </div>
              );
            })}



          </div>
        </div>
      </div>
    </>

  );
}
export default Product;