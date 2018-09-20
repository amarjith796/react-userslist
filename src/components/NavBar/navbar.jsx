import React, { Component } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand tag={RRNavLink} to="/">
          Reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/" activeClassName="active">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/users" activeClassName="active">
                Users
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={RRNavLink} to="/charts">
                  Charts
                </DropdownItem>
                <DropdownItem>About</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
