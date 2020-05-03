import React, { Component } from "react";
import Typography from "../components/typography";
import { Col, Row } from "../components/container";

class Filt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    let counts = 0;
    this.props.filter.forEach(element =>
      element.value !== "" ? counts++ : null
    );
    this.setState({ count: counts });
  };

  render() {
    return (
      <>
        <Typography variant="filter">Filter ({this.state.count})</Typography>
        {this.props.filter.map((item, index) => {
          return item.value.length > 0 ? (
            <Row key={index}>
              <Col name="col-s-2">
                <Typography variant="filter-item">
                  {item.name}: {item.value}
                </Typography>
              </Col>
            </Row>
          ) : null;
        })}
      </>
    );
  }
}

export default Filt;
