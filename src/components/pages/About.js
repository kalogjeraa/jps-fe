import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/utilities/Button';
import { PARAGRAPHS } from '../../constants/about';

import '../../styles/about.css';
import Location from '../../images/about/location.png';

const About = () => {
  return (
    <div className="container">
      <img
        src={Location}
        alt="location"
        className="ohio"
      />
      <h1 className="text-center paragraphs-heading">
        PRIVATE LABEL & FULFILLMENT SPECIALISTS
      </h1>

      <div className="paragraphs-text">
        {PARAGRAPHS.map(text => {
          return <p>{text}</p>
        })}
      </div>

      <div className="text-center font-weight-bold">
        <Link to="/quote">
          <Button
            styles="btn btn-primary btn-lg border-0 jps-theme button-custom"
          >
            <span className="font-weight-bold">GET A QUOTE</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;