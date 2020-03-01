import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Header() {
  return (

    <div className="Header">
      <Navbar bg="light" variant="light" expand="lg">
        <a href="/"><Navbar.Brand>Manos Gouvrikos</Navbar.Brand></a>

        <Navbar.Toggle className="border-dark" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/workspace">Workspace</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}

export default Header;
