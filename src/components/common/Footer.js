import React from 'react';
import { Link } from 'react-router-dom';

import ASI from '../../images/icons/asi-footer.png';
import FDA from '../../images/icons/fda-footer.png';
import Facebook from '../../images/icons/facebook.png';
import Twitter from '../../images/icons/twitter.png';

import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start footer-custom">
      <div className="container container-custom">
        <div className="row">
          <div className="col-lg-3">
            <div className="text-left social-icon">
              <a
                href="https://www.facebook.com/jetpackshipping/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                />
              </a>
              <a
                href="https://twitter.com/JetPackShipping"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={Twitter}
                  alt="twitter"
                />
              </a>
              <div className="spacer spacer-bottom">
                <p className="spacer-up">2021 Copyright <Link to="/">JetPack</Link></p>
                <p>All rights reserved.</p>
                <p>1-844-4-JETPACK</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="text-left">
              <p className="spacer spacer-bottom">
                <Link to="/about">About JetPack</Link>
              </p>
              <p>
                <Link to="/certifications">
                  <img
                    src={ASI}
                    alt="asi"
                  />
                </Link>
              </p>
              <p>
                <Link to="/certifications">
                  <img
                    src={FDA}
                    alt="fda"
                  />
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="text-left spacer spacer-bottom">
                <p><Link to="/terms">Privacy Policy</Link></p>
                <p><Link to="/terms">Terms & Conditions</Link></p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text-left stay-updated">
              STAY UPDATED WITH US!
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;