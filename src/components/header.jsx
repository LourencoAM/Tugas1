import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "../assets/all.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="bgw" color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <b style={{ color: "white" }}>{this.props.nameh}</b>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
