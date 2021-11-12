import { Outlet,Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const NabbarAdmin = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand >Admin</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Quan Ly Sach</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link><Link to="/">Back to Home</Link></Nav.Link>
            </Nav>
            <Outlet/>
        </Navbar>
    );
}
export default NabbarAdmin;