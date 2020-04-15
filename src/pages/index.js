import React, { Component } from "react";

import Header from "../templates/header";
import Font from "../components/typography";
import Icon from "../components/icons";

import Box from "../components/box";
import Button from "../components/button";
import { Label, Input, Select } from "../components/form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    console.log(this.state.menu);
    return (
      <>
        <Header />
        <div className="content">
          <div className="true-flex">
            <Font variant="v2">Daftar Pemesanan</Font>
            <Font variant="v3">
              Filter
              {this.state.menu === true ? (
                <Icon
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                  src="./direction.svg"
                />
              ) : (
                <Icon
                  onClick={() => {
                    this.setState({
                      menu: true
                    });
                  }}
                  src="./direction.svg"
                  transform="rotate(180deg)"
                />
              )}
            </Font>
          </div>
        </div>
        {this.state.menu === true ? (
          <div style={{ animation: "menu-show 2s", overflow: "hidden" }}>
            <div className="content">
              <Box variant="box-heavy block">
                <div className="row block">
                  <div className="col col-2 col-s-4">
                    <Label>No. Pemesanan</Label>
                    <Input type="text" name="orderNumber" />
                  </div>
                  <div className="col col-2 col-s-4">
                    <Label>Asal</Label>
                    <Input
                      type="text"
                      name="from"
                      defaultValue="dari Singapura"
                    />
                  </div>
                  <div className="col col-2 col-s-4">
                    <Label>Tujuan</Label>
                    <Input
                      type="text"
                      name="to"
                      defaultValue="Tujuan Indonesia"
                    />
                  </div>
                  <div className="col col-2 col-s-4">
                    <Label>ETA</Label>
                    <Input type="date" name="eta" />
                  </div>
                </div>
                <div className="row">
                  <div className="col col-1 col-s-4">
                    <Label>Status</Label>
                    <Select name="status">
                      <option value="status 1">status 1</option>
                      <option value="status 2">status 2</option>
                      <option value="status 3">status 3</option>
                      <option value="status 4">status 4</option>
                    </Select>
                  </div>
                  <div className="col col-1 col-s-4">
                    <Label>Tipe</Label>
                    <Select name="type">
                      <option value="tipe 1">tipe 1</option>
                      <option value="tipe 2">tipe 2</option>
                      <option value="tipe 3">tipe 3</option>
                      <option value="tipe 4">tipe 4</option>
                    </Select>
                  </div>
                  <div className="col col-1 col-s-4">
                    <Label>Tipe Kargo</Label>
                    <Select name="cargoType">
                      <option value="tipe kargo 1">tipe kargo 1</option>
                      <option value="tipe kargo 2">tipe kargo 2</option>
                      <option value="tipe kargo 3">tipe kargo 3</option>
                      <option value="tipe kargo 4">tipe kargo 4</option>
                    </Select>
                  </div>
                  <div className="col col-1 col-s-4">
                    <Label>Incoterm</Label>
                    <Select name="incoterm">
                      <option value="incoterm 1">incoterm 1</option>
                      <option value="incoterm 2">incoterm 2</option>
                      <option value="incoterm 3">incoterm 3</option>
                      <option value="incoterm 4">incoterm 4</option>
                    </Select>
                  </div>
                  <div className="col col-2 col-s-4">
                    <Label>Tipe Kontainer</Label>
                    <Select name="containerType">
                      <option value="tipe kontainer 1">tipe kontainer 1</option>
                      <option value="tipe kontainer 2">tipe kontainer 2</option>
                      <option value="tipe kontainer 3">tipe kontainer 3</option>
                      <option value="tipe kontainer 4">tipe kontainer 4</option>
                    </Select>
                  </div>
                  <div className="col col-1 col-s-4">
                    <Button
                      onClick={() => this.setState({ menu: false })}
                      variant="primary"
                    >
                      Filter
                    </Button>
                  </div>
                  <div className="col col-1 col-s-4">
                    <Button variant="secondary">Reset Filter</Button>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        ) : (
          <div style={{ animation: "menu-hidden 2s", overflow: "hidden" }}>
            <div className="content">
              <Box variant="box-heavy flex">
                <div className="col col-s-4">
                  <Font variant="v3">Filter (9)</Font>
                </div>
                <div className="col col-s-4">
                  <Font variant="v4">No. Pemesanan : 1234568910</Font>
                </div>
                <div className="col col-s-4">
                  <Font variant="v4">Asal : Singapura</Font>
                </div>
                <div className="col col-s-4">
                  <Font variant="v4">Tujuan : Indonesia</Font>
                </div>
                <div className="col col-s-4">
                  <Font variant="v4">ETA : 28 November 2018</Font>
                </div>
                <div className="col col-s-4">
                  <Font variant="v4">Status : Pilih Forwarder</Font>
                </div>
                <div className="col col-s-4">
                  <Icon src="./direction2.svg" />
                </div>
              </Box>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default App;
