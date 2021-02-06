import React from 'react';

import Row from '../common/utilities/Row';
import ButtonQuote from '../common/ButtonQuote';
import Header from '../../images/fulfillment/fulfillment-header.jpg';
import Flow from  '../../images/fulfillment/fulfillment-flow.jpg';
import Trophy from '../../images/fulfillment/fulfillment-no-1-fulfillment-provider.png';
import Thinking from '../../images/fulfillment/fulfillment-dedicated-partner.png';
import Partner from '../../images/fulfillment/fulfillment-automate-your-orders.png';

import { INTRODUCTION, NO_1, DEDICATED, AUTOMATE } from  '../../constants/fulfillment.js';
import fulfillment from '../../data/fulfillment.json';

import '../../styles/fulfillment.css';

const Fulfillment = () => {
  return (
    <div className="container spacing">
      <img
        src={Header}
        alt="header"
        className="center-block belt"
      />
      <div>
        <h1 className="text-center page-heading">
          Fulfillment Made Easy.
        </h1>
        <div className="introduction-text">
          {INTRODUCTION}
        </div>
      </div>

      <Row>
        <img
          src={Flow}
          alt="flow"
          className="flow-position"
        />
      </Row>

      <Row special="process">
        <div className="col-md-6 order-2 order-md-1">
          <img
            src={Trophy}
            alt="trophy"
            className="fancy-pictures"
          />
        </div>
        <div className="col-md-6 order-1 order-md-2">
          <div className="paragraphs-heading">
            #1 Fulfillment Provider
          </div>
          <div className="paragraphs">
            {NO_1}
          </div>
        </div>
      </Row>

      <Row special="process">
        <div className="col-md-6">
          <div className="paragraphs-heading">
            Your Dedicated Partner
          </div>
          <div className="paragraphs">
            {DEDICATED}
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={Thinking}
            alt="thinking"
            className="fancy-pictures-alternative"
          />
        </div>
      </Row>

      <Row special="process">
        <div className="col-md-6 order-2 order-md-1">
          <img
            src={Partner}
            alt="partner"
            className="fancy-pictures-alternative"
          />
        </div>
        <div className="col-md-6 order-1 order-md-2">
          <div className="paragraphs-heading">
            Automate Your Orders.
          </div>
          <div className="paragraphs">
            {AUTOMATE}
          </div>
        </div>
      </Row>

      <ButtonQuote
        hasIcon={false}
        position="text-center"
      />
    </div>
  );
};

export default Fulfillment;