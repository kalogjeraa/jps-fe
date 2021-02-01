import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './utilities/Button';
import Arrow from '../../images/icons/arrow.png';

import '../../styles/button-quote.css';

const ButtonQuote = props => {
  const {
    hasIcon,
    position
  } = props;

  const styles = position !== ''
    ? `${position} font-weight-bold`
    : 'font-weight-bold';

  return (
    <div className={styles}>
    <Link to="/quote">
      <Button
        styles="btn btn-primary btn-lg border-0 jps-theme button-corners"
      >
        <span className="font-weight-bold">
          GET A QUOTE
        </span>
        {hasIcon && <img
          src={Arrow}
          alt="arrow"
          className="arrow-size"
        />}
      </Button>
    </Link>
  </div>
  );
};

ButtonQuote.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  position: PropTypes.string,
};

export default ButtonQuote;