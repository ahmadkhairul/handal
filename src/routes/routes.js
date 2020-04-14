import React, { Component } from "react";
import Index from "../pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
