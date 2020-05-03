import React, { Component } from "react";
import { connect } from "react-redux";

import { getOrder } from "../_actions/order";

import Typography from "../components/typography";
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
      <Container>
        {data.length > 0 ? (
          data &&
          data.map((item, index) => {
            return (
              <Box key={index} index={index}>
                <Row>
                  <Col name="col-1 col-s-1">
                    <Typography variant="list-label">Asal</Typography> <br />
                    <Typography variant="list-item">
                      {item.portFrom}
                    </Typography>{" "}
                    <br />
                    <Typography variant="list-label">
                      {item.from}
                    </Typography>{" "}
                    <br />
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
                    <Typography variant="list-label">Tujuan</Typography> <br />
                    <Typography variant="list-item">
                      {item.portTo}
                    </Typography>{" "}
                    <br />
                    <Typography variant="list-label">{item.to}</Typography>
                  </Col>
                  <Col name="col-2 col-s-4">
                    <Typography variant="list-label">No Pemesanan</Typography>{" "}
                    <br />
                    <Typography variant="list-item-2">
                      {item.orderNumber}
                    </Typography>
                    <p style={{ marginBottom: "1em" }}></p>
                    <Typography variant="list-label">
                      Tipe | Kargo | Incoterms
                    </Typography>
                    <br />
                    <Typography variant="list-item-2">
                      {item.type} | {item.cargoType} | {item.incoterms}
                    </Typography>
                  </Col>
                  <Col name="col-1 col-s-4">
                    <Typography variant="list-label">ETA</Typography> <br />
                    <Typography variant="list-item-2">{item.ETA}</Typography>
                    <p style={{ marginBottom: "1em" }}></p>
                    <Typography variant="list-label">
                      Tipe Kontainer
                    </Typography>{" "}
                    <br />
                    <Typography variant="list-item-2">
                      {item.containerType}
                    </Typography>
                  </Col>
                  <Col name="col-1 col-s-2">
                    <Typography variant="list-label">Status</Typography> <br />
                    <Typography variant="list-item">{item.status}</Typography>
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
            );
          })
        ) : (
          <Box>DATA NOT FOUND</Box>
        )}
      </Container>
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
