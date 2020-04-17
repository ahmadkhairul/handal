import React, { Component } from "react";
import Avatar from "../components/avatar";
import Font from "../components/typography";
import { Container } from "../components/container";

class App extends Component {
  render() {
    return (
      <Container name="header">
        <div className="flex-true">
          <Font variant="brand">HANDAL</Font>
          <Avatar name="/profile.svg" size="45px" alt="profile" />
        </div>
      </Container>
    );
  }
}

export default App;
