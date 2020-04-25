import React, { Component } from "react";

import Header from "../templates/header";
import { Container } from "../components/container";
import Filter from "./filter";
import Order from "./order";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container name="root-container">
          <Filter />
          <Order />
        </Container>
      </>
    );
  }
}

export default App;
