import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
class NavbarComponent extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Nav>
          <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/users" to="/users">
            Users
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarComponent;
