import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/JetPacklogo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <li className="nav-item active">
            <Link
              to="/about"
              className="nav-link"
            >
              About
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              to="/fulfillment"
              className="nav-link"
            >
              Fulfillment
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/certifications"
              className="nav-link"
            >
              Certifications
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/private-labeling"
              className="nav-link"
            >
              Private Labeling
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/telephone-dial"
              className="nav-link"
            >
              1-844-4-JETPACK
              <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;