//React Imports
import React, { Component } from "react";
import { Col, Row } from 'antd';

//Component Imports
import "./styles/main.scss";
import "./styles/NewsContainer.scss";



class NewsContainerVer extends Component
{
  
  render() 
  {
    if(this.props.articleType == "news")
    {
      var articleType = <news>NEWS</news>;
    }
    else if(this.props.articleType == "review")
    {
      var articleType = <review>REVIEW</review>;
    }

    if (this.props.selector == "Vertical")
    {
      return (
        <>      
          <Col className="NewsContainerVer" xs={24} sm={9} md={9} lg={9} xl={9} >
            <Col xs={22} sm={22} md={22} lg={22} xl={22}>
              <Row>
                <img src={this.props.img} alt=""/>
              </Row>
            </Col>
            
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <Row>
                <h2>{articleType}{this.props.title}</h2>    
                <p>{this.props.paragraph}</p>
              </Row>
            </Col>               
          </Col>
        </>
      );
    }
    else if (this.props.selector == "Horizontal")
    {
      return (
        <>      
          <Col className="NewsContainerHor" xs={24} sm={14} md={14} lg={14} xl={14} >
            <Col className="" xs={22} sm={22} md={22} lg={22} xl={22} >
              <Row>
                <img src={this.props.img} alt=""/>
              </Row>
            </Col>
                 
  
            <Col xs={24} sm={24} md={24} lg={24} xl={24} >
              <Row>
                <h2>{articleType}{this.props.title}</h2>    
                <p>{this.props.paragraph}</p>
              </Row>
            </Col>
          </Col>
        </>
      );
    }
  }  
}

export default NewsContainerVer;

