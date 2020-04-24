import React, { Component } from "react";
import Font from "../components/typography";
import Icon from "../components/icons";
import Box from "../components/box";
import Button from "../components/button";
import Animation from "../components/animation";
import { Label, Input, Select } from "../components/form";
import { Container, Col, Row } from "../components/container";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    return (
      <>
        <Container>
          <div className="flex-true">
            <Font variant="menu">Daftar Pemesanan</Font>
            <Font variant="filter">
              Filter
              {this.state.menu === true ? (
                <Icon
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                  src="./icons/direction.svg"
                  style={{ margin: "0em 0em 0em 0.5em" }}
                />
              ) : (
                <Icon
                  onClick={() => {
                    this.setState({
                      menu: true
                    });
                  }}
                  src="./icons/direction.svg"
                  style={{
                    margin: "0em 0em 0em 0.5em",
                    transform: "rotate(180deg)"
                  }}
                />
              )}
            </Font>
          </div>
        </Container>
        {this.state.menu === true ? (
          <Animation name="menu-show" duration="1s">
            <Container>
              <Box variant="box-heavy block spacing">
                <Row>
                  <Col name="col-2 col-s-4">
                    <Label>No. Pemesanan</Label>
                    <Input type="text" name="orderNumber" />
                  </Col>
                  <Col name="col-2 col-s-4">
                    <Label>Asal</Label>
                    <Input
                      type="text"
                      name="from"
                      defaultValue="dari Singapura"
                    />
                  </Col>
                  <Col name="col-2 col-s-4">
                    <Label>Tujuan</Label>
                    <Input
                      type="text"
                      name="to"
                      defaultValue="Tujuan Indonesia"
                    />
                  </Col>
                  <Col name="col-2 col-s-4">
                    <Label>ETA</Label>
                    <Input type="date" name="eta" />
                  </Col>
                </Row>
                <Row>
                  <Col name="col-1 col-s-4">
                    <Label>Status</Label>
                    <Select name="status">
                      <option value="status 1">status 1</option>
                      <option value="status 2">status 2</option>
                      <option value="status 3">status 3</option>
                      <option value="status 4">status 4</option>
                    </Select>
                  </Col>
                  <Col name="col-1 col-s-4">
                    <Label>Tipe</Label>
                    <Select name="type">
                      <option value="tipe 1">tipe 1</option>
                      <option value="tipe 2">tipe 2</option>
                      <option value="tipe 3">tipe 3</option>
                      <option value="tipe 4">tipe 4</option>
                    </Select>
                  </Col>
                  <Col name="col-1 col-s-4">
                    <Label>Tipe Kargo</Label>
                    <Select name="cargoType">
                      <option value="tipe kargo 1">tipe kargo 1</option>
                      <option value="tipe kargo 2">tipe kargo 2</option>
                      <option value="tipe kargo 3">tipe kargo 3</option>
                      <option value="tipe kargo 4">tipe kargo 4</option>
                    </Select>
                  </Col>
                  <Col name="col-1 col-s-4">
                    <Label>Incoterm</Label>
                    <Select name="incoterm">
                      <option value="incoterm 1">incoterm 1</option>
                      <option value="incoterm 2">incoterm 2</option>
                      <option value="incoterm 3">incoterm 3</option>
                      <option value="incoterm 4">incoterm 4</option>
                    </Select>
                  </Col>
                  <Col name="col-2 col-s-4">
                    <Label>Tipe Kontainer</Label>
                    <Select name="containerType">
                      <option value="tipe kontainer 1">tipe kontainer 1</option>
                      <option value="tipe kontainer 2">tipe kontainer 2</option>
                      <option value="tipe kontainer 3">tipe kontainer 3</option>
                      <option value="tipe kontainer 4">tipe kontainer 4</option>
                    </Select>
                  </Col>
                  <Col name="col-1 col-s-4">
                    <p style={{ marginBottom: "2.55em" }}></p>
                    <Button
                      onClick={() => this.setState({ menu: false })}
                      variant="primary"
                    >
                      Filter
                    </Button>
                  </Col>
                  <Col name="col-1 col-s-4">
                    <p style={{ marginBottom: "2.55em" }}></p>
                    <Button variant="secondary">Reset Filter</Button>
                  </Col>
                </Row>
              </Box>
            </Container>
          </Animation>
        ) : (
          <Animation name="menu-hide" duration="1s">
            <Container>
              <Box variant="box-heavy flex spacing">
                <Col name="col-s-4">
                  <Font variant="filter">Filter (9)</Font>
                </Col>
                <Col name="col-s-4">
                  <Font variant="filter-item">No. Pemesanan : 1234568910</Font>
                </Col>
                <Col name="col-s-4">
                  <Font variant="filter-item">Asal : Singapura</Font>
                </Col>
                <Col name="col-s-4">
                  <Font variant="filter-item">Tujuan : Indonesia</Font>
                </Col>
                <Col name="col-s-4">
                  <Font variant="filter-item">ETA : 28 November 2018</Font>
                </Col>
                <Col name="col-s-4">
                  <Font variant="filter-item">Status : Pilih Forwarder</Font>
                </Col>
                <Col name="col-s-4">
                  <Icon src="./icons/direction2.svg" />
                </Col>
              </Box>
            </Container>
          </Animation>
        )}
      </>
    );
  }
}

export default Filter;
