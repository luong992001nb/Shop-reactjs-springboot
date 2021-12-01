
import SlideProduct from "./SlideProduct";
import SlideShow from "./SlideShow";
 
const BodyHome = (prop) => {
  return (
    <>

     <SlideShow />
      <div className="promo-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo1">
                <i className="fa fa-refresh" />
                <p>30 Days return</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo2">
                <i className="fa fa-truck" />
                <p>Free shipping</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo3">
                <i className="fa fa-lock" />
                <p>Secure </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo4">
                <i className="fa fa-gift" />
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End promo area */}

      <div>
        <h2 className="section-title">Latest Products</h2>
        <div className="product-carousel">
          <SlideProduct product={prop.product} />
          
        </div>
        
        </div>
   
      <div className="brands-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="brand-wrapper">
                <div className="brand-list">
                  <img src="https://i.imgur.com/U5uQYzm.png" alt="" />
                  <img src="https://i.imgur.com/haYORF1.png" alt="" />
                  <img src="https://i.imgur.com/eg3O138.png" alt="" />
                  <img src="https://i.imgur.com/295o6OK.png" alt="" />
                  <img src="https://i.imgur.com/3pOM66r.png" alt="" />
                  <img src="https://i.imgur.com/9mEkpRy.png" alt="" />
                  <img src="https://i.imgur.com/U5uQYzm.png" alt="" />
                  <img src="https://i.imgur.com/haYORF1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End brands area */}


    </>
  );
}
export default BodyHome;