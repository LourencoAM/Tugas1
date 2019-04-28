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

export default class Error extends Component {
  render() {
    return (
      <div>
        <Navbar className="bgw" color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <b style={{ color: "white" }}>Go-Jek</b>
          </NavbarBrand>
        </Navbar>
        <br />
        <h1>Maaf Halaman Ini Masih Dikembangkan</h1>
      </div>
    );
  }
}
