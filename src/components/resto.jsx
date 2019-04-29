import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Res from "./isiresto";

class Resto extends Component {
  state = {
    rere: [
      {
        id: 1,
        img:
          "https://thumb.viva.co.id/media/frontend/thumbs3/2016/12/30/5865d6bd7c6c2-logo-burger-king_665_374.jpg"
      },
      {
        id: 2,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/All_American_Food_Logo.svg/1200px-All_American_Food_Logo.svg.png"
      },
      {
        id: 3,
        img:
          "https://upload.wikimedia.org/wikipedia/id/b/b4/Logo_HokBen_old.jpg"
      },
      {
        id: 4,
        img:
          "https://upload.wikimedia.org/wikipedia/id/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png"
      }
    ]
  };
  render() {
    return (
      <div>
        <Row>
          {this.state.rere.map(it => {
            return (
              <Col xs="12" lg="6">
                <Res gambar={it.img} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Resto;
