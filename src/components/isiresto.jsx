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
import { Link } from "react-router-dom";

export default class Res extends Component {
  render() {
    return (
      <div>
        <Card className="ukuran">
          <CardImg top src={this.props.gambar} />
          <CardBody>
            <div align="center">
              <Button
                size="sm"
                outline
                color="success"
                tag={Link}
                to="/pembayaran"
              >
                Pesan Sekarang
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
