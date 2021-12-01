import {useParams,useNavigate ,Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { readCate } from '../../../api/categoryAPI';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';
import { read } from '../../../api/productAPI';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const Category=({categoryAp,product})=>{
    const {id} =useParams();
    const navigate = useNavigate();
    const [category,setCategory]  = useState([]);
    const [produ,setPro] = useState([]);
    useEffect(()=>{
        readCate(id).then((response)=>{
            setCategory(response.data);
            const newProduct = product.filter((item) => item.category === id)
            setPro(newProduct);
        });

    


    },[id]);
return(
    <>
            <div className="container">
          <h1>Category</h1>
        </div>
        <div className="row">
          <Swiper spaceBetween={30} pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper">


            {categoryAp && categoryAp.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to={"/product/"+`${item.id}`+"/category"} >
                  <button style={{ height: '70px', width: '80px', margin: "40px" }} type="button" class="btn btn-outline-secondary">
                    {item.name}
                  </button>
                  </Link>

                </SwiperSlide>);
            })}
          </Swiper>
        </div>
     <h1>{category.name}</h1>
     <div className="container">
          <div className="row">
            {produ  && produ.map((item, index) => {
              return (
                <div key={index} className="col-md-3 col-sm-6">
                  <div className="single-product" >
                    <div className="product-f-image">
                      <img src={item.avatar} alt="" style={{ height: '250px', width: '263' }} />
                      <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                        <Link to={"/product/"+`${item.id}`} className="view-details-link"><i className="fa fa-link" /> See details  </Link>
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
    </>
);
}
export default Category;