import React, { Component } from "react";
import Resto from "../../components/resto";
import Header from "../../components/header";

export default class Restaurant extends Component {
  render() {
    return (
      <div>
        <Header nameh="Go-Food" />
        <Resto />
      </div>
    );
  }
}
