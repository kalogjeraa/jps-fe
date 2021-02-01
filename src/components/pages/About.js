import React from 'react';
import { Link } from 'react-router-dom';

import ButtonQuote from '../common/ButtonQuote';
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
      <h3 className="text-center paragraphs-heading">
        PRIVATE LABEL & FULFILLMENT SPECIALISTS
      </h3>

      <div className="paragraphs-text">
        {PARAGRAPHS.map(text => {
          return <p>{text}</p>
        })}
      </div>

      <ButtonQuote
        hasIcon={false}
        position="text-center"
      />
    </div>
  );
};

export default About;