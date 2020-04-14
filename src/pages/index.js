import React, { Component } from "react";
import Header from "../templates/header";
import Font from "../components/typography";
import Container from "../components/container";
import Icon from "../components/icons";
import Box from "../components/box";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="content">
          <Container>
            <Font variant="v2">Daftar Pemesanan</Font>
            <Font variant="v3">
              Filter
              <Icon src="./direction.svg" />
            </Font>
          </Container>
        </div>

        <div className="content">
          <Container>
            <Box name="outerBox">
              <Font variant="v3">Filter (9)</Font>
              <Font variant="v4">No. Pemesanan : 1234568910</Font>
              <Font variant="v4">Asal : Singapura</Font>
              <Font variant="v4">Tujuan : Indonesia</Font>
              <Font variant="v4">ETA : 28 November 2018</Font>
              <Font variant="v4">Status : Pilih Forwarder</Font>
            </Box>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
