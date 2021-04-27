//Import Mains
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

//Import Components
import NavBar from "../reuseable/NavBar";
import MainCarousel from "./MainCarousel";
import CartFloatingBtn from "../reuseable/CartFloatingBtn";
import MainRightNewsContainers from "./MainRightNewsContainers";

//Import Styles
import "./styles/main.scss";

class MainPage extends Component
{
  render() 
  {
    return (
      <>      
        <NavBar />
        <body className="theBod">

          <div className="topPad" />
          

          <Row className="topRow">
            <MainCarousel />
            <Col className="r" xs={0} sm={0} md={0} lg={6} xl={6} />
          </Row>

          <br/>
        
          <Row className="secondRow">
            <Col className="newsSquare" xs={24} sm={24} md={24} lg={9} xl={9} >Col</Col>

            <Col xs={1} sm={1} md={1} lg={1} xl={1} />

            <Col className="secondRowRight" xs={24} sm={24} md={24} lg={14} xl={14} >
              <Row>
                <MainRightNewsContainers />
              </Row>
          </Col>          
        </Row>

        <div style={{ position: "relative", marginTop: "5em" }}>
          <Link to="/second">Second Test Page</Link>
        </div>

        <CartFloatingBtn />

        </body>
      </>
    );
  }
}

export default MainPage;