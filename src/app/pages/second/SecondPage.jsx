//React Imports
import React, { Component } from "react";
import { Row, Col } from 'antd';

//Component Imports
import "./styles/second.scss";

import NavBar from "../reuseable/NavBar";


class SecondPage extends Component
{
  render() 
  {
    return (
      <>      
        <NavBar />

        <body className="theBod">

          <div className="topPad" />
          

          <Row className="topRow">
          <Row>
              </Row>
            <Col className="r" xs={6} sm={6} md={6} lg={6} xl={6} />
          </Row>

        </body>

      </>
    );
  }
}

export default SecondPage;