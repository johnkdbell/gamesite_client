//React Imports
import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

//Component Imports
import MainPage from "./pages/main/MainPage";
import SecondPage from "./pages/second/SecondPage";

class App extends Component {
  render() 
  {
    return (
      <Fragment>
        <Router>
          <Route exact path='/' component={MainPage} />          
          <Route exact path='/second' component={SecondPage} />
        </Router>
      </Fragment>
    );
  }
}

export default App;