import React, { Component } from "react";
import Header from "./header";
import Counter from "./counter";
import { Row, Col, Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Pembayaran extends Component {
  state = {
    makanan: [
      {
        id: 1,
        nama: "Whopper® Meal",
        price: 50000,
        gambar:
          "https://assets.limetray.com/assets/user_images/menus/compressed/whopper-meal.jpg"
      },
      {
        id: 2,
        nama: "Whopperdamaian XL Meal",
        price: 60000,
        gambar:
          "https://assets.limetray.com/assets/user_images/menus/compressed/1555306341_WhopperDamaianXLMealMedium.jpg"
      },
      {
        id: 3,
        nama: "Mozzarella Cheeseburger",
        price: 60000,
        gambar:
          "https://assets.limetray.com/assets/user_images/menus/compressed/1543213858_MozzarellacheeseburgerXLmeal.jpg"
      },
      {
        id: 4,
        nama: "2for30 - 2 Whopper® Jr",
        price: 30000,
        gambar:
          "https://assets.limetray.com/assets/user_images/menus/compressed/1551514175_2for30whopperjr.jpg"
      },
      {
        id: 5,
        nama: "Steakhouse BBQ Meal",
        price: 60000,
        gambar:
          "https://assets.limetray.com/assets/user_images/menus/compressed/steak-house-bbq-meal.jpg"
      },
      {
        id: 6,
        nama: "Mushroom Swiss XL Meal",
        price: 58000,
        gambar:
          "https://assets.limetray.com/assets/user_images/menus/compressed/munshroom-swiss-xl-meal.jpg"
      }
    ],
    total: 0
  };
  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
    sessionStorage.total = this.state.total + harga;
  };
  kurangTotalHarga = harga => {
    this.setState({
      total: this.state.total - harga
    });
    sessionStorage.total = this.state.total - harga;
  };
  render() {
    return (
      <div>
        <Header nameh="Go-Food" />
        <Jumbotron>
          <div align="center">
            <h5>Total Pesanan:</h5>
            <hr />
            <b>Rp{this.state.total}</b>{" "}
          </div>
          <div align="center">
            <Button size="sm" outline color="danger" tag={Link} to="/closing">
              Bayar Sekarang
            </Button>
          </div>
        </Jumbotron>
        <Row>
          {this.state.makanan.map(ip => (
            <Col xs="6">
              {""}
              <Counter
                menu={ip.nama}
                gambar={ip.gambar}
                harga={ip.price}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default Pembayaran;
