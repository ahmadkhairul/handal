import React, { Component } from "react";

import Typography from "../components/typography";
import Box from "../components/box";
import Icon from "../components/icons";
import { Col, Row } from "../components/container";
import Animation from "../components/animation";
import { Table, Tbody, Tr, Td } from "../components/table";

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
        <Typography variant="list-detail pointer" onClick={this.toggleAction}>
          Detail Pemesanan
          <Icon
            src="./icons/direction3.svg"
            style={{
              margin: "0em 0em 0em 0.5em",
              transform: this.state.menu ? "rotate(180deg)" : ""
            }}
          />
        </Typography>
        {this.state.detail === true ? (
          <Animation name="animation-detail" duration="1s">
            <Col>
              <hr style={{ border: "0.5px solid #CCCCCC" }} />
            </Col>
            <Row>
              <Col name="col-3 col-s-4">
                <Typography variant="list-label-2">
                  Alamat Pengiriman
                </Typography>
                <Box Flex height="180px">
                  {this.props.data.senderDetail.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-8 col-s-4">
                          <Typography>{item.name}</Typography>
                        </Col>
                        <Col name="col-8 col-s-4">
                          <Typography variant="list-label-2">
                            {item.email}
                          </Typography>
                        </Col>
                        <Col name="col-8 col-s-4">
                          <Typography variant="list-label-2">
                            {item.phone}
                          </Typography>
                        </Col>
                        <Col name="col-8 col-s-4">
                          <Typography variant="list-label-2">
                            {item.address}
                          </Typography>
                        </Col>
                      </Row>
                    );
                  })}
                </Box>
              </Col>
              <Col name="col-2 col-s-4">
                <Typography variant="list-label-2">Catatan</Typography>
                <Box Flex height="180px">
                  <Row>
                    <Col name="col-8 col-s-4">
                      <Typography variant="list-label-2">
                        {this.props.data.note}
                      </Typography>
                    </Col>
                  </Row>
                </Box>
              </Col>
              <Col name="col-3 col-s-4">
                <Typography variant="list-label-2">Total</Typography>
                <Box height="180px">
                  {this.props.data.total.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-8 col-s-4 flex-true">
                          <Typography variant="list-label-2">Jumlah</Typography>
                          <Typography variant="list-label-2">
                            {item.amount},000 pc
                          </Typography>
                        </Col>
                        <Col name="col-8 col-s-4 flex-true">
                          <Typography variant="list-label-2">Berat</Typography>
                          <Typography variant="list-label-2">
                            {item.weight},000 kg
                          </Typography>
                        </Col>
                        <Col name="col-8 col-s-4 flex-true">
                          <Typography variant="list-label-2">Volume</Typography>
                          <Typography variant="list-label-2">
                            {item.volume},000 kg
                          </Typography>
                        </Col>
                        <Col>
                          <hr style={{ border: "0.25px solid #CCCCCC" }} />
                        </Col>
                        <Col name="col-8 col-s-4 flex-true">
                          <Typography variant="list-label-2">
                            Harga Kisaran
                          </Typography>
                          <Typography>IDR {item.price},000 </Typography>
                        </Col>
                      </Row>
                    );
                  })}
                </Box>
              </Col>
            </Row>
            <Row>
              <Col name="col-5 col-s-4">
                <Typography variant="list-label-2">
                  Daftar Barang Pengiriman
                </Typography>
                {this.props.data.itemList.map((item, index) => {
                  return (
                    <Table>
                      <Tbody>
                        <Tr>
                          <Td
                            rowSpan="4"
                            style={{
                              borderRight: "1px solid #cccccc",
                              textAlign: "center",
                              verticalAlign: "middle",
                              width: "10%"
                            }}
                            textStyle="list-label-3"
                          >
                            {index + 1}
                          </Td>
                          <Td colSpan="4" textStyle="list-label-2">
                            {item.name}
                          </Td>
                        </Tr>
                        <Tr>
                          <Td textStyle="list-label-3">HS Code</Td>
                          <Td textStyle="list-label-2">{item.HSCode}</Td>
                          <Td textStyle="list-label-3">Jumlah</Td>
                          <Td textStyle="list-label-2">{item.total}</Td>
                        </Tr>
                        <Tr>
                          <Td textStyle="list-label-3">Berat</Td>
                          <Td textStyle="list-label-2">{item.weight}</Td>
                          <Td textStyle="list-label-3">Harga Barang</Td>
                          <Td textStyle="list-label-2">{item.price}</Td>
                        </Tr>
                        <Tr>
                          <Td textStyle="list-label-3">Volume</Td>
                          <Td textStyle="list-label-2">{item.volume}</Td>
                          <Td textStyle="list-label-3">Total Harga</Td>
                          <Td textStyle="list-label-2">{item.totalPrice}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  );
                })}
              </Col>
              <Col name="col-3 col-s-4">
                <div className="flex-true">
                  <Typography variant="list-label-2">
                    Dokumen Pribadi
                  </Typography>
                  <Typography variant="list-detail-2">
                    Rincian Berkas
                  </Typography>
                </div>
                <Box>
                  {this.props.data.document.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">SIUP</Typography>
                          <Typography variant="list-label-2">
                            {item.siup}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">NPWP</Typography>
                          <Typography variant="list-label-2">
                            {item.npwp}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">TDP</Typography>
                          <Typography variant="list-label-2">
                            {item.tdp}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">KTP</Typography>
                          <Typography variant="list-label-2">
                            {item.ktp}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">
                            Passport
                          </Typography>
                          <Typography variant="list-label-2">
                            {item.passport}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">
                            Lisensi
                          </Typography>
                          <Typography variant="list-label-2">
                            {item.lisence}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">
                            NIK Import
                          </Typography>
                          <Typography variant="list-label-2">
                            {item.nikImport}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">
                            Sertifikat
                          </Typography>
                          <Typography variant="list-label-2">
                            {item.certificate}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">
                            NIK Eksport
                          </Typography>
                          <Typography variant="list-label-2">
                            {item.nikExport}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">Others</Typography>
                          <Typography variant="list-label-2">
                            {item.others}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                      </Row>
                    );
                  })}
                </Box>
                <div className="flex-true">
                  <Typography variant="list-label-2">
                    Dokumen Pengiriman
                  </Typography>
                  <Typography variant="list-detail-2">
                    Rincian Berkas
                  </Typography>
                </div>
                <Box>
                  {this.props.data.document.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">
                            Daftar Invoice
                          </Typography>
                          <Typography variant="list-label-2">
                            {item.invoice}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
                        </Col>
                        <Col name="col-4 col-s-2 flex-true">
                          <Typography variant="list-label-2">
                            Daftar Packing
                          </Typography>
                          <Typography variant="list-label-2">
                            {item.packing}
                            <Icon
                              src="./icons/doc.svg"
                              style={{ margin: "0em 0em 0em 0.5em" }}
                            />
                          </Typography>
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
