import React from 'react';
import { Link } from 'react-router-dom';

import ASI from '../../images/icons/asi-footer.png';
import FDA from '../../images/icons/fda-footer.png';

import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start footer-custom">
      <div className="container container-custom">
        <div className="row">
          <div className="col-lg-3">
            <div className="text-left">
              <p>2021 Copyright <Link to="/">JetPack</Link></p>
              <p>All rights reserved.</p>
              <p>1-844-4-JETPACK</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="text-left">
              <Link to="/about">About JetPack</Link>
              <p><img
                src={ASI}
                alt="asi"
              /></p>
              <p><img
                src={FDA}
                alt="fda"
              /></p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="text-left">
              <p><Link to="/terms">Privacy Policy</Link></p>
              <p><Link to="/terms">Terms & Conditions</Link></p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text-left">
              STAY UPDATED WITH US!
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;