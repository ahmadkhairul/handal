import React, { Component } from "react";

import Font from "../components/typography";
import Box from "../components/box";
import Icon from "../components/icons";
import { Col, Row, Container } from "../components/container";
import Animation from "../components/animation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };
  }

  render() {
    console.log(this.state.detail);
    return (
      <>
        <Font variant="list-detail">
          Detail Pemesanan
          {this.state.detail === false ? (
            <Icon
              onClick={() => {
                this.setState({
                  detail: true
                });
              }}
              src="./direction3.svg"
              margin="0em 0em 0em 0.5em"
            />
          ) : (
            <Icon
              onClick={() => {
                this.setState({
                  detail: false
                });
              }}
              src="./direction3.svg"
              margin="0em 0em 0em 0.5em"
              transform="rotate(180deg)"
            />
          )}
        </Font>

        {this.state.detail === true ? (
          <Animation name="animation-detail" duration="1s">
            <Col>
              <hr style={{ border: "0.5px solid #CCCCCC" }} />
            </Col>
            <Row>
              <Col name="col-3 col-s-4">
                <Font variant="list-label-2">Alamat Pengiriman</Font>
                <Box variant="box-heavy flex"></Box>
              </Col>
              <Col name="col-2 col-s-4">
                <Font variant="list-label-2">Catatan</Font>
                <Box variant="box-heavy flex"></Box>
              </Col>
              <Col name="col-3 col-s-4">
                <Font variant="list-label-2">Total</Font>
                <Box variant="box-heavy flex"></Box>
              </Col>
            </Row>
            <Row>
              <Col name="col-5 col-s-4">
                <Font variant="list-label-2">Daftar Barang Pengiriman</Font>
                <Box variant="box-heavy flex"></Box>
              </Col>
              <Col name="col-3 col-s-4">
                <div className="flex-true">
                  <Font variant="list-label-2">Dokumen Pribadi</Font>
                  <Font variant="list-detail-2">Rincian Berkas</Font>
                </div>
                <Box variant="box-heavy flex"></Box>
                <div className="flex-true">
                  <Font variant="list-label-2">Dokumen Pengiriman</Font>
                  <Font variant="list-detail-2">Rincian Berkas</Font>
                </div>
                <Box variant="box-heavy flex"></Box>
              </Col>
            </Row>
          </Animation>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default App;
