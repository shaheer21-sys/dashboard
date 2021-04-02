import React from 'react';
import './nav.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from './images/chipster.png';


function nav(){
    return(
        <div className="navigation">
        <Navbar collapseOnSelect className="navB" expand="lg" bg="dark" variant="dark" >

  <Navbar.Brand href="#home">
       <div className ="portTitle" > <img src ={Logo} width="45" alt = "logo"/>  PORTFOLIO DASHBOARD</div>
       </Navbar.Brand>


  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
     
      <Nav.Link  href="#memes"> MY PORTFOLIOS | </Nav.Link>
      
      <Nav.Link href="#deets">CREATE PORTFOLIO  |</Nav.Link>
      <Nav.Link href="#deets2">test_user <FontAwesomeIcon icon={faUserCircle} /></Nav.Link>

      <NavDropdown  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">1.</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">2.</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">3.</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"> 4.</NavDropdown.Item>
      </NavDropdown>
    
    </Nav>
  </Navbar.Collapse>

</Navbar>
</div>

    );
}

export default nav;