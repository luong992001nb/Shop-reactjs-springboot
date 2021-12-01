
import {useState,useEffect} from 'react';
import {useParams,useNavigate } from 'react-router-dom';
import { read } from "../../api/productAPI";
import { readCate } from "../../api/categoryAPI";
import SlideProduct from './components/SlideProduct';
const SingleProduct = (prop) => {
    const {id} =useParams();
    const navigate = useNavigate();
    const [product,setProduct] = useState({});
    const [category,setCategory] = useState({});
    useEffect(()=>{
     read(id).then((response)=>{
         setProduct(response.data);
         
     });

    },[id]);
    useEffect(()=>{
        readCate(product.category).then((response)=>{
            setCategory(response.data);
        });
   
       },[product.category]);
       const [produ,setProdu] = useState([]);
       useEffect(()=>{
        const newProductcate = prop.product.filter((item) => item.category === product.category)
        const newProduct = newProductcate.filter((item)=> item.id !== product.id );
       setProdu(newProduct);
       },[product.id,category.id]);

    return (<>
    
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row"> 
                    <div className="col-md-8">
                        <div className="product-content-right">
                            <div className="product-breadcroumb">
                                <a href>Home</a>
                                <a href>{category.name}</a>
                                <a href>{product.name}</a>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="product-images">
                                        <div className="product-main-img">
                                            <img src= {product.avatar} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="product-inner">
                                        <h2 className="product-name">{product.name}</h2>
                                        <div className="product-inner-price">
                                            <ins>$ {product.price}</ins>
                                        </div>
                                        <form action className="cart">
                                            <div className="quantity">
                                                <input type="number" size={4} className="input-text qty text" title="Qty" defaultValue={1} name="quantity" min={1} step={1} />
                                            </div>
                                            <button className="add_to_cart_button" type="submit">Add to cart</button>
                                            <br />
                                            <hr />
                                            <button type="button" class="btn btn-info" onClick={ ()=> navigate(-1)}>Back</button>
                                        </form>

                                    </div>
                                    
                                </div>
                            </div>
                            <div className="container">
                                 {product.description }
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <hr />
                <div>
                     <h1>Sản phẩn liên quan</h1>
                    <SlideProduct product={produ} />
                </div>
                
            </div>
        </div>

    </>);
}
export default SingleProduct;