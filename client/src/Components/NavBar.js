import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

//styling
import "./style/NavBar.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded:false,
    };
  }


  render() {
    return (
      <div className="NavBar">
        <Navbar
          expand="lg"
          bg="light"
          variant="light"
          onToggle={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
          expanded={this.state.expanded}
        >
          <Navbar.Brand href="/">Manos Gouvrikos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/" onClick={()=>this.setState({ expanded: !this.state.expanded })}>
                Home
              </Link>

              <Link className="nav-link" to="/projects" onClick={()=>this.setState({ expanded: !this.state.expanded })}>
                Projects
              </Link>
              <Link className="nav-link" to="/workspace" onClick={()=>this.setState({ expanded: !this.state.expanded })}>
                Workspace
              </Link>
              <Link className="nav-link" to="/contact" onClick={()=>this.setState({ expanded: !this.state.expanded })}>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
