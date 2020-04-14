import React, { Component } from "react";
import Avatar from "../components/avatar";
import Font from "../components/typography";
import Container from "../components/container";

class App extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Font variant="brand">HANDAL</Font>
          <Avatar name="/profile.svg" size="45px" alt="profile" />
        </Container>
      </div>
    );
  }
}

export default App;
