import React, { Component } from "react";
import Font from "../components/typography";
import Icon from "../components/icons";
import Box from "../components/box";
import Button from "../components/button";
import Animation from "../components/animation";
import { Label, Input, Select } from "../components/form";
import { Container, Col, Row } from "../components/container";

import Filt from "../pages/filt";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      orderNumber: "",
      from: "",
      to: "",
      ETA: "",
      status: "",
      type: "",
      cargoType: "",
      incoterms: "",
      containerType: "",
      count: 0,
      filter: []
    };
  }

  toggleAction = () => {
    this.state.menu === true
      ? this.setState({ menu: false })
      : this.setState({ menu: true });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });

    // console.log(e.target.name, e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      filter: [
        {
          name: "No. Pemesanan",
          value: this.state.orderNumber
        },
        {
          name: "Asal",
          value: this.state.from
        },
        {
          name: "Tujuan",
          value: this.state.to
        },
        {
          name: "ETA",
          value: this.state.ETA
        },
        {
          name: "Status",
          value: this.state.status
        },
        {
          name: "Tipe",
          value: this.state.type
        },
        {
          name: "Tipe Kargo",
          value: this.state.cargoType
        },
        {
          name: "Incoterms",
          value: this.state.incoterms
        },
        {
          name: "Tipe Container",
          value: this.state.containerType
        }
      ]
    });
    this.toggleAction();
  };

  handleReset = e => {
    e.preventDefault();
    this.setState({
      orderNumber: "",
      from: "",
      to: "",
      ETA: "",
      status: "",
      type: "",
      cargoType: "",
      incoterms: "",
      containerType: "",
      filter: []
    });
    this.toggleAction();
  };

  render() {
    return (
      <>
        <Container>
          <div className="flex-true">
            <Font variant="menu">Daftar Pemesanan</Font>
            <Font variant="filter">
              Filter
              <Icon
                onClick={this.toggleAction}
                src="./icons/direction.svg"
                style={{
                  margin: "0em 0em 0em 0.5em",
                  transform: this.state.menu ? "rotate(180deg)" : ""
                }}
              />
            </Font>
          </div>
        </Container>
        {this.state.menu === true ? (
          <Animation name="menu-show" duration="1s">
            <Container>
              <form onSubmit={this.handleSubmit}>
                <Box variant="box-heavy block spacing">
                  <Row>
                    <Col name="col-2 col-s-4">
                      <Label>No. Pemesanan</Label>
                      <Input
                        onChange={this.handleChange}
                        value={this.state.orderNumber}
                        type="text"
                        name="orderNumber"
                      />
                    </Col>
                    <Col name="col-2 col-s-4">
                      <Label>Asal</Label>
                      <Input
                        onChange={this.handleChange}
                        value={this.state.from}
                        type="text"
                        name="from"
                      />
                    </Col>
                    <Col name="col-2 col-s-4">
                      <Label>Tujuan</Label>
                      <Input
                        onChange={this.handleChange}
                        value={this.state.to}
                        type="text"
                        name="to"
                      />
                    </Col>
                    <Col name="col-2 col-s-4">
                      <Label>ETA</Label>
                      <Input
                        onChange={this.handleChange}
                        value={this.state.ETA}
                        type="date"
                        name="ETA"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col name="col-1 col-s-4">
                      <Label>Status</Label>
                      <Select
                        name="status"
                        onChange={this.handleChange}
                        value={this.state.status}
                      >
                        <option value="">--status--</option>
                        <option value="Belum Dikirim">Belum Dikirim</option>
                        <option value="Pilih Forwarder">Pilih Forwarder</option>
                        <option value="Terkirim">Terkirim</option>
                      </Select>
                    </Col>
                    <Col name="col-1 col-s-4">
                      <Label>Tipe</Label>
                      <Select
                        name="type"
                        onChange={this.handleChange}
                        value={this.state.tipe}
                      >
                        <option value="">--tipe--</option>
                        <option value="Import">Import</option>
                        <option value="Export">Export</option>
                      </Select>
                    </Col>
                    <Col name="col-1 col-s-4">
                      <Label>Tipe Kargo</Label>
                      <Select
                        name="cargoType"
                        onChange={this.handleChange}
                        value={this.state.cargoType}
                      >
                        <option value="">--tipe kargo--</option>
                        <option value="Laut">Laut</option>
                        <option value="Darat">Darat</option>
                        <option value="Udara">Udara</option>
                      </Select>
                    </Col>
                    <Col name="col-1 col-s-4">
                      <Label>Incoterm</Label>
                      <Select
                        name="incoterms"
                        onChange={this.handleChange}
                        value={this.state.incoterms}
                      >
                        <option value="">--incoterm--</option>
                        <option value="FOB">FOB</option>
                        <option value="EXW">EXW</option>
                        <option value="FCA">FCA</option>
                      </Select>
                    </Col>
                    <Col name="col-2 col-s-4">
                      <Label>Tipe Kontainer</Label>
                      <Select
                        name="containerType"
                        onChange={this.handleChange}
                        value={this.state.containerType}
                      >
                        <option value="">--tipe container--</option>
                        <option value="FCL 40 Dry">FCL 40 Dry</option>
                        <option value="FCL 20 Dry">FCL 20 Dry</option>
                        <option value="FCL 10 Dry">FCL 10 Dry</option>
                      </Select>
                    </Col>
                    <Col name="col-1 col-s-4">
                      <p style={{ marginBottom: "2.55em" }}></p>
                      <Button variant="primary" type="submit">
                        Filter
                      </Button>
                    </Col>
                    <Col name="col-1 col-s-4">
                      <p style={{ marginBottom: "2.55em" }}></p>
                      <Button onClick={this.handleReset} variant="secondary">
                        Reset Filter
                      </Button>
                    </Col>
                  </Row>
                </Box>
              </form>
            </Container>
          </Animation>
        ) : (
          <Animation name="menu-hide" duration="1s">
            <Container>
              <Box variant="box-heavy flex spacing">
                <Filt filter={this.state.filter} />
                <Icon
                  onClick={this.toggleAction}
                  src="./icons/direction2.svg"
                />
              </Box>
            </Container>
          </Animation>
        )}
      </>
    );
  }
}

export default Filter;
