import React, { Component } from "react";

import Font from "../components/typography";
import Box from "../components/box";
import Icon from "../components/icons";
import { Col, Row } from "../components/container";
import Animation from "../components/animation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };
  }

  toggleAction = () => {
    this.state.detail === true
      ? this.setState({ detail: false })
      : this.setState({ detail: true });
  };

  render() {
    return (
      <>
        <Font variant="list-detail">
          Detail Pemesanan
          <Icon
            onClick={this.toggleAction}
            src="./icons/direction3.svg"
            style={{
              margin: "0em 0em 0em 0.5em",
              transform: this.state.menu ? "rotate(180deg)" : ""
            }}
          />
        </Font>
        {this.state.detail === true ? (
          <Animation name="animation-detail" duration="1s">
            <Col>
              <hr style={{ border: "0.5px solid #CCCCCC" }} />
            </Col>
            <Row>
              <Col name="col-3 col-s-4">
                <Font variant="list-label-2">Alamat Pengiriman</Font>
                <Box variant="box-heavy flex spacing">
                  {this.props.data.senderDetail.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-8 col-s-4">
                          <Font>{item.name}</Font>
                        </Col>
                        <Col name="col-8 col-s-4">
                          <Font variant="list-label-2">{item.email}</Font>
                        </Col>
                        <Col name="col-8 col-s-4">
                          <Font variant="list-label-2">{item.phone}</Font>
                        </Col>
                        <Col name="col-8 col-s-4">
                          <Font variant="list-label-2">{item.address}</Font>
                        </Col>
                      </Row>
                    );
                  })}
                </Box>
              </Col>
              <Col name="col-2 col-s-4">
                <Font variant="list-label-2">Catatan</Font>
                <Box variant="box-heavy flex spacing">
                  <Row>
                    <Col name="col-8 col-s-4">
                      <Font variant="list-label-2">{this.props.data.note}</Font>
                    </Col>
                  </Row>
                </Box>
              </Col>
              <Col name="col-3 col-s-4">
                <Font variant="list-label-2">Total</Font>
                <Box variant="box-heavy block spacing">
                  {this.props.data.total.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-8 col-s-4 flex-true">
                          <Font variant="list-label-2">Jumlah</Font>
                          <Font variant="list-label-2">
                            {item.amount},000 pc
                          </Font>
                        </Col>
                        <Col name="col-8 col-s-4 flex-true">
                          <Font variant="list-label-2">Berat</Font>
                          <Font variant="list-label-2">
                            {item.weight},000 kg
                          </Font>
                        </Col>
                        <Col name="col-8 col-s-4 flex-true">
                          <Font variant="list-label-2">Volume</Font>
                          <Font variant="list-label-2">
                            {item.volume},000 kg
                          </Font>
                        </Col>
                        <Col>
                          <hr style={{ border: "0.25px solid #CCCCCC" }} />
                        </Col>
                        <Col name="col-8 col-s-4 flex-true">
                          <Font variant="list-label-2">Harga Kisaran</Font>
                          <Font>IDR {item.price},000 </Font>
                        </Col>
                      </Row>
                    );
                  })}
                </Box>
              </Col>
            </Row>
            <Row>
              <Col name="col-5 col-s-4">
                <Font variant="list-label-2">Daftar Barang Pengiriman</Font>
                {this.props.data.itemList.map((item, index) => {
                  return (
                    <div className="table-wrapper">
                      <table>
                        <tbody>
                          <tr>
                            <td
                              rowSpan="4"
                              style={{
                                borderRight: "1px solid #cccccc",
                                textAlign: "center",
                                verticalAlign: "middle",
                                width: "10%"
                              }}
                            >
                              <Font variant="list-label-3">{index + 1}</Font>
                            </td>
                            <td colSpan="4">
                              <Font variant="list-label-2">{item.name}</Font>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Font variant="list-label-3">HS Code</Font>
                            </td>
                            <td>
                              <Font variant="list-label-2">{item.HSCode}</Font>
                            </td>
                            <td>
                              <Font variant="list-label-3">Jumlah</Font>
                            </td>
                            <td>
                              <Font variant="list-label-2">{item.total}</Font>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Font variant="list-label-3">Berat</Font>
                            </td>
                            <td>
                              <Font variant="list-label-2">{item.weight}</Font>
                            </td>
                            <td>
                              <Font variant="list-label-3">Harga Barang</Font>
                            </td>
                            <td>
                              <Font variant="list-label-2">{item.price}</Font>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Font variant="list-label-3">Volume</Font>
                            </td>
                            <td>
                              <Font variant="list-label-2">{item.volume}</Font>
                            </td>
                            <td>
                              <Font variant="list-label-3">Total Harga</Font>
                            </td>
                            <td>
                              <Font variant="list-label-2">
                                {item.totalPrice}
                              </Font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </Col>
              <Col name="col-3 col-s-4">
                <div className="flex-true">
                  <Font variant="list-label-2">Dokumen Pribadi</Font>
                  <Font variant="list-detail-2">Rincian Berkas</Font>
                </div>
                <Box variant="box-heavy block spacing">
                  {this.props.data.document.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">SIUP</Font>
                          <Font variant="list-label-2">
                            {item.siup}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">NPWP</Font>
                          <Font variant="list-label-2">
                            {item.npwp}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">TDP</Font>
                          <Font variant="list-label-2">
                            {item.tdp}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">KTP</Font>
                          <Font variant="list-label-2">
                            {item.ktp}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">Passport</Font>
                          <Font variant="list-label-2">
                            {item.passport}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">Lisensi</Font>
                          <Font variant="list-label-2">
                            {item.lisence}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">NIK Import</Font>
                          <Font variant="list-label-2">
                            {item.nikImport}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">Sertifikat</Font>
                          <Font variant="list-label-2">
                            {item.certificate}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">NIK Eksport</Font>
                          <Font variant="list-label-2">
                            {item.nikExport}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">Others</Font>
                          <Font variant="list-label-2">
                            {item.others}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                      </Row>
                    );
                  })}
                </Box>
                <div className="flex-true">
                  <Font variant="list-label-2">Dokumen Pengiriman</Font>
                  <Font variant="list-detail-2">Rincian Berkas</Font>
                </div>
                <Box variant="box-heavy block spacing">
                  {this.props.data.document.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">Daftar Invoice</Font>
                          <Font variant="list-label-2">
                            {item.invoice}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Font variant="list-label-2">Daftar Packing</Font>
                          <Font variant="list-label-2">
                            {item.packing}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Font>
                        </Col>
                      </Row>
                    );
                  })}
                </Box>
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
