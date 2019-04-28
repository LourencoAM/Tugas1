import React, { Component } from "react";
import Aplikasi from "../../components/aplikasi";
import Header from "../../components/header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header nameh="Go-Jek" />
        <Aplikasi />
      </div>
    );
  }
}
