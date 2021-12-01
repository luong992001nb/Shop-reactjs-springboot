import { Link, Outlet } from "react-router-dom";
const Header = ()=>{
return(
 <>
         <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="user-menu">
                  <ul>
                    <li><Link to="/admin"><i className="fa fa-user" /> My Account</Link></li>
                    <li><Link to="/register"><i className="fa fa-user" /> Resgister</Link></li>
                    <li><Link to="/login"><i className="fa fa-user" /> Login</Link></li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End header area */}
        <div className="site-branding-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="logo">
                  <h1><a href="./"><img  src="https://i.imgur.com/81UUIG6.png" /></a></h1>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="shopping-item">
                  <a href="#">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart" /> <span className="product-count">5</span></a>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End site branding area */}
        <div className="mainmenu-area">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li ><Link to="/">Home</Link></li>
                  <li><Link to="/product">Shop Page</Link></li>
                  <li><Link to="/product/:id">Product Details</Link></li>
                  <li><Link to="/cardproduct">Card Product</Link></li>
                  {/* <li><a href="cart.html">Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Others</a></li>
                  <li><a href="#">Contact</a></li> */}
                </ul>
              </div>
            </nav>
          </div>
          <Outlet/>
        </div> {/* End mainmenu area */}
        
 </>
);
}
export default Header;