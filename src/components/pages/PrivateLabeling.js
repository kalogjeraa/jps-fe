import React from 'react';

import ButtonQuote from '../common/ButtonQuote';
import Bottle from '../../images/privateLabeling/private-labeling-bottle-0.jpg';
import Branding from '../../images/privateLabeling/branding.jpg';
import Read from '../../images/privateLabeling/readOn.jpg';
import First from '../../images/privateLabeling/first.jpg';
import Third from '../../images/privateLabeling/third.jpg';
import Fifth from '../../images/privateLabeling/fifth.jpg';
import Seventh from '../../images/privateLabeling/seventh.jpg';
import Ninth from '../../images/privateLabeling/ninth.jpg';
import Contact from '../../images/privateLabeling/contact.jpg';

import '../../styles/private-labeling.css';

const IMAGES = [Bottle, Branding, Read, First, Third, Fifth, Seventh, Ninth, Contact];

const PrivateLabeling = () => {
  return (
    <>
      <div className="container spacing">
        {IMAGES.map((image, key) => {
          return (

              <img
                className="col-md-12"
                src={image}
                alt={key}
              />

          );
        })}
      </div>
      <ButtonQuote
        hasIcon={false}
        position="text-center"
      />
    </>
  );
};

export default PrivateLabeling;