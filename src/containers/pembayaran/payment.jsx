import React, { Component } from "react";
import Pembayaran from "../../components/pembayaran";
import Header from "../../components/header";

export default class Payment extends Component {
  render() {
    return (
      <div>
        <Header nameh="Go-Food" />
        <Pembayaran />
      </div>
    );
  }
}
