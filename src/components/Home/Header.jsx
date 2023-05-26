import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Css from '../../css/Header.css'


const Header = () => {
  return (
    <>

    <Navbar variant="dark" className='navBar' >
        <Container>
          <Navbar.Brand href="#home">Mavy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
     
    </>
  )
}

export default Header