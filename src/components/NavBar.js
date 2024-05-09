import React from 'react';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import logoImage from '../sources/Icon.png';
import { BsArrowRight } from 'react-icons/bs';


function NavBar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" style={{ marginInlineStart: '110px',marginInlineEnd: '130px' }}>
      <Container className="justify-content-start">
        <Navbar.Brand href="#home">
          <img src={logoImage} alt="Logo" />
          <span style={{ fontWeight: 'bolder', marginLeft: '7px' }}>Nexcent</span>
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#community">Community</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button variant="success"style={{fontSize:'12px',minWidth:'120px',backgroundColor:'#4CAF4F',borderColor:'#4CAF4F'}}>Register Now <BsArrowRight /></Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
