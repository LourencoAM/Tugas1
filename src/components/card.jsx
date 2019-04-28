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

export default class MyCard extends Component {
  render() {
    return (
      <div>
        <Card className="ukuran">
          <CardImg src={this.props.gambar} />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <div align="center">
              <Button size="sm" outline color="success" tag={Link} to="/resto">
                {this.props.nbutton}
              </Button>{" "}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
