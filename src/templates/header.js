import React, { Component } from "react";
import Avatar from "../components/avatar";
import Font from "../components/typography";

class App extends Component {
  render() {
    return (
      <div className="header">
        <div className="true-flex">
          <Font variant="brand">HANDAL</Font>
          <Avatar name="/profile.svg" size="45px" alt="profile" />
        </div>
      </div>
    );
  }
}

export default App;
