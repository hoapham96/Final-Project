import React from "react";
import { Nav, NavDropdown, Container, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

function NavBar() {
   
  
    return (
      
          <Navbar styleName="justify-content-space-between" sticky="top" bg="light" expand="lg" id="bar">
  <Container>
    <Navbar.Brand href="#home"><h1>Pokemon Cards</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end" id="navlinks">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Dashboard</Nav.Link>
        <Nav.Link href="#link">Collection</Nav.Link>
        <NavDropdown title="Menu(user)" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Sign In</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Create Account</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      


);
}

export default NavBar;