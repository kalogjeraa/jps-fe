import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BootstrapCarousel = () => {
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item style={{'height': "600px"}}>
            <img
              style={{'height': '600px'}}
              className="d-block w-100"
              src={'assets/images/home/JetPack_Website_Banner_FulFillment.jpg'}
              alt="Jetpack Banner"
            />
          </Carousel.Item>
          <Carousel.Item style={{'height': "600px"}}>
            <img
              style={{'height': '600px'}}
              className="d-block w-100"
              src={'assets/images/home/JetPack_Website_Banner_PrivateLabel.jpg'}
              alt="Jetpack Banner"
            />
          </Carousel.Item>
          <Carousel.Item style={{'height': "600px"}}>
            <img
              style={{'height': '600px'}}
              className="d-block w-100"
              src={'assets/images/home/JetPack_Website_Banner_RocketPower.jpg'}
              alt="Jetpack Banner"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BootstrapCarousel;