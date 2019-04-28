import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/aplikasi";
import Resto from "./containers/resto";
import Closing from "./containers/closing";
import Error from "./components/error";
import Pembayaran from "./components/pembayaran";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resto" component={Resto} />
          <Route path="/pembayaran" component={Pembayaran} />
          <Route path="error" component={Error} />
          <Route path="/closing" component={Closing} />
        </Switch>
      </div>
    );
  }
}

export default App;
