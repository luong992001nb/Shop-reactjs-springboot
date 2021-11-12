import { Outlet,Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import NavDropdown from 'react-bootstrap/NavDropdown'
const Navbar3 = () =>{
return(
  <Navbar className="" bg="dark" variant="dark">
  <Navbar.Brand >Book Store</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link ><Link to="/">Home</Link></Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
  <NavDropdown title="User" id="nav-dropdown">
    <NavDropdown.Item ><Link to="/admin">Quan Ly</Link></NavDropdown.Item>
    <NavDropdown.Item >Dang Nhap</NavDropdown.Item>
    <NavDropdown.Item >Doi Mat Khau</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item>Dang xuat</NavDropdown.Item>
  </NavDropdown>
  <Outlet/>
</Navbar>
);
}
export default Navbar3;
