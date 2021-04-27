//React Imports
import React, { Component } from "react";
import { Col, Carousel } from 'antd';

//Component Imports
import "./styles/mainCarousel.scss";

class MainCarousel extends Component
{
  
  render() 
  {
    return (
      <>      
        <Col className="l" xs={24} sm={24} md={24} lg={18} xl={18} >
          <div className="mainCarousel">
            <Carousel
              className="space-carousel"
              autoplay
              autoplaySpeed="25"
              effect="fade"
              dotPosition="top"
              infinite
              draggable
              pauseOnFocus
            >
              <div>
                <div className="">
                  <img src="https://i.pinimg.com/originals/ed/48/70/ed4870665ae0c34790486a26e3659325.jpg" alt=""/>
                </div>
                <div className="description">
                  <p className="caroTitle">ka chow whats poppin fellow weirdos its ya boi HP back at it again with the FISH PEOPLE</p>
                  <p className="caroParagraph">Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
                </div>
              </div>

              <div>
                <div className="">
                  <img src="https://media.discordapp.net/attachments/692728559508127765/728778523015118888/unknown.png" alt=""/>
                </div>                
                <div className="description">
                  <p className="caroTitle">ka chow whats poppin fellow weirdos its ya boi HP back at it again with the FISH PEOPLE</p>
                  <p className="caroParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div>
                <div className="">
                  <img src="https://cdn.vox-cdn.com/thumbor/Z2xcGwiTZqINCGRTlAQ1Tm_TGJQ=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/66924153/ps5_digitial_edition_hardware.0.png" alt=""/>
                </div>
                <div className="description">
                  <p className="caroTitle">PS5 pricing in Nielsen survey could indicate plans to have low PlayStation 5 price</p>
                  <p className="caroParagraph">Reddit user offers up insight into what Sony’s plans could be in regard to the PS5 price. </p>
                </div>
              </div>
            </Carousel>
            
            <div className="featStoriesTitle">
              <label className="featStoriesTitleFont">Featured Stories</label>
            </div>
          </div>
        </Col>
      </>
    );
  }
}

export default MainCarousel;