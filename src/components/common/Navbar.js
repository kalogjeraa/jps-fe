import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './utilities/NavItem';
import ButtonQuote from '../common/ButtonQuote';
import Logo from '../../images/JetPacklogo.png';

import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light bg-white font-custom shadow-custom translucent">
      <Link
        to="/"
        className="navbar-brand"
      >
        <img
          src={Logo}
          alt="logo"
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavItem
            text="About"
            url="/about"
          />
          <NavItem
            text="Fulfillment"
            url="/fulfillment"
          />
          <NavItem
            text="Certifications"
            url="/certifications"
          />
          <NavItem
            text="Private Labeling"
            url="/private-labeling"
          />
          <NavItem
            text="1-888-4-JETPACK"
            url="/telephone-dial"
          />
        </ul>
        <ul className="nav ml-auto">
          <ButtonQuote
            hasIcon={true}
          />
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;