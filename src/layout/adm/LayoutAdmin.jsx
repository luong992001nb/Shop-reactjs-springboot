import { Link,Outlet } from "react-router-dom";
const LayoutAdmin = () => {
  return (
    <div>
      <div>
        <div id="wrapper">
          {/* Sidebar */}
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link to="/admin" className="sidebar-brand d-flex align-items-center justify-content-center">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
              </div>
              <div className="sidebar-brand-text mx-3">Admin </div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
              <Link to="dashboard" className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></Link>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
            <Link to="product" className="nav-link">
            <i className="fab fa-product-hunt" />
                <span>Product Management</span>
                </Link>
            </li>
            <li className="nav-item">
            <Link to="category" className="nav-link">
            <i className="fab fa-product-hunt" />
                <span>Category Management</span>
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link">
            <i className="fas fa-sign-out-alt" />
                <span>Logout</span>
                </Link>
            </li>
          </ul>          
          <div className="container">
          <Outlet/>
          
          </div>
        </div>
      </div>
    </div>
  );
}
export default LayoutAdmin;