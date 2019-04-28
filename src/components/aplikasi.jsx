import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MyCard from "./card";

class Aplikasi extends Component {
  state = {
    gogo: [
      {
        id: 1,
        nbutton: "Go - Food",
        gambar:
          "https://www.goodnewsfromindonesia.id/uploads/post/large-61658247234-go-food-846971cd9193ffd74180a532f479cdfe.jpg"
      },
      {
        id: 2,
        nbutton: "Go-Ride",
        gambar:
          "https://obs.line-scdn.net/0h6ZaSUh8JaXVcKkV37zIWImZ8ahpvRnp2OBw4awxEN0EhHSpwNElxEysoMkEkSi4rMkQjEHsockR3Si53ZE5x"
      },
      {
        id: 3,
        nbutton: "Go-Car",
        gambar:
          "https://satelitpost.com/wp-content/uploads/2017/07/goo-car-696x464.jpg"
      },
      {
        id: 4,
        nbutton: "Go-Box",
        gambar:
          "https://4.bp.blogspot.com/-vYY6JQksloY/VssGZU6747I/AAAAAAAAEl8/AVCH51qnBTo/s1600/gobox%2Bjogja%2Bjasa%2Bangkut%2Bbarang%2Baman.jpg"
      },
      {
        id: 5,
        nbutton: "Go-Send",
        gambar:
          "https://s1.bukalapak.com/img/6053638733/large/gosend_sameday.png"
      },
      {
        id: 6,
        nbutton: "Go-Clean",
        gambar:
          "https://apollo-singapore.akamaized.net/v1/files/oglakiyec3mt2-ID/image;s=966x691;olx-st/_1_.jpg"
      }
    ]
  };
  render() {
    return (
      <div>
        <br />
        <Row>
          {this.state.gogo.map(key => {
            return (
              <Col xs="6">
                <MyCard gambar={key.gambar} nbutton={key.nbutton} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Aplikasi;
