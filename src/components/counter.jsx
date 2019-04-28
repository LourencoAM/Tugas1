import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Navbar } from "reactstrap";

export default class Counter extends Component {
  state = {
    poll: 0
  };
  tambah = () => {
    this.setState({
      poll: this.state.poll + 1
    });
    this.props.tambahTotalHarga(this.props.harga);
  };
  kurang = () => {
    if (this.state.poll === 0) {
      return;
    }
    this.setState({
      poll: this.state.poll - 1
    });
    this.props.kurangTotalHarga(this.props.harga);
  };
  render() {
    return (
      <div>
        <Card className="ukuran">
          <CardImg src={this.props.gambar} />
          <CardBody>
            <br />
            <CardTitle>
              <b>{this.props.menu}</b>
            </CardTitle>
            <CardSubtitle>
              <p>Harga: Rp{this.props.harga}</p>
            </CardSubtitle>
            <Navbar>
              <Button size="sm" onClick={this.kurang} outline color="danger">
                -
              </Button>
              <Button size="sm" onClick={this.tambah} outline color="success">
                +
              </Button>
            </Navbar>
          </CardBody>
        </Card>
      </div>
    );
  }
}
