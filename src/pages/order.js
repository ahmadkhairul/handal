import React, { Component } from "react";
import { connect } from "react-redux";

import { getOrder } from "../_actions/order";

import Font from "../components/typography";
import Icon from "../components/icons";
import Box from "../components/box";
import Button from "../components/button";

import { Container, Col, Row } from "../components/container";

import DetailOrder from "./detailOrder";

class Order extends Component {
  componentDidMount = async () => {
    await this.props.getOrder();
  };

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, loading, error } = this.props.order;

    if (loading === true) return <h1>Loading...</h1>;

    if (error) return <h1>Unknown Error Occured</h1>;

    return (
      <>
        {data &&
          data.map((item, index) => {
            return (
              <Container key={index} index={index}>
                <Box variant="box-heavy block spacing">
                  <Row>
                    <Col name="col-1 col-s-1">
                      <Font variant="list-label">Asal</Font> <br />
                      <Font variant="list-item">{item.portFrom}</Font> <br />
                      <Font variant="list-label">{item.from}</Font> <br />
                      <p style={{ marginBottom: "0.5em" }}></p>
                    </Col>
                    <Col name="col-1 col-s-1">
                      <Icon
                        src="./icons/arrow.svg"
                        width="30px"
                        style={{ margin: "15px 0px 0px 10%" }}
                      />
                    </Col>
                    <Col name="col-1 col-s-1">
                      <Font variant="list-label">Tujuan</Font> <br />
                      <Font variant="list-item">{item.portTo}</Font> <br />
                      <Font variant="list-label">{item.to}</Font>
                    </Col>
                    <Col name="col-2 col-s-4">
                      <Font variant="list-label">No Pemesanan</Font> <br />
                      <Font variant="list-item-2">{item.orderNumber}</Font>
                      <p style={{ marginBottom: "1em" }}></p>
                      <Font variant="list-label">Tipe | Kargo | Incoterms</Font>
                      <br />
                      <Font variant="list-item-2">
                        {item.type} | {item.cargoType} | {item.incoterms}
                      </Font>
                    </Col>
                    <Col name="col-1 col-s-4">
                      <Font variant="list-label">ETA</Font> <br />
                      <Font variant="list-item-2">{item.ETA}</Font>
                      <p style={{ marginBottom: "1em" }}></p>
                      <Font variant="list-label">Tipe Kontainer</Font> <br />
                      <Font variant="list-item-2">{item.containerType}</Font>
                    </Col>
                    <Col name="col-1 col-s-2">
                      <Font variant="list-label">Status</Font> <br />
                      <Font variant="list-item">{item.status}</Font>
                      <p style={{ marginBottom: "1.35em" }}></p>
                      <Button variant="success">Quotation</Button>
                    </Col>
                    <Col name="col-1 col-s-2">
                      <Icon
                        src="./icons/close.svg"
                        width="20px"
                        height="20px"
                        style={{
                          border: "1px solid #CCCCCC",
                          borderRadius: "50%",
                          backgroundColor: "#CCCCCC",
                          padding: "3px",
                          margin: "20px 0 0 20%"
                        }}
                      />
                    </Col>
                  </Row>
                  <DetailOrder data={item} />
                </Box>
              </Container>
            );
          })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrder: () => dispatch(getOrder())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
