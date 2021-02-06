import React from 'react';

import Row from '../common/utilities/Row';
import Button from '../common/utilities/Button';

import ASI from '../../images/certifications/asi.png';
import FDA from '../../images/certifications/fda-registered-facility.png';

import { ASI as asi, FDA as fda } from '../../constants/certifications.js';

import '../../styles/certifications.css';

const Certifications = () => {
  return (
    <div className="container">
      <div className="text-center row-space page-headings">
        JETPACK SHIPPING CERTIFICATIONS
      </div>
      <Row special="row-space">
        <div className="col-md-4">
          <img
            src={ASI}
            alt="asi"
            className="certifications-image-asi"
          />
        </div>
        <div className="col-md-8">
          <div className="text-center small-headings">
            ASI CGMP CERTIFICATION
          </div>
          <div className="paragraphs-text">
            {asi}
          </div>
          <Button
            styles="btn btn-primary btn-lg border-0 float-right jps-theme button-corners"
          >
            <span className="font-weight-bold">
              View Certificate
            </span>
          </Button>
        </div>
      </Row>
      <Row special="row-space">
        <div className="col-md-4">
          <img
              src={FDA}
              alt="fda"
              className="certifications-image-fda"
          />
        </div>
        <div className="col-md-8">
          <div className="text-center small-headings">
            FDA REGISTERED FACILITY
          </div>
          <div className="paragraphs-text">
            {fda}
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Certifications;