import React from 'react';

import Header from '../../images/fulfillment/fulfillment-header.jpg';
import Flow from  '../../images/fulfillment/fulfillment-flow.jpg';
import Trophy from '../../images/fulfillment/fulfillment-no-1-fulfillment-provider.png';
import Thinking from '../../images/fulfillment/fulfillment-dedicated-partner.png';
import Partner from '../../images/fulfillment/fulfillment-automate-your-orders.png';
import ButtonQuote from '../common/ButtonQuote';

import '../../styles/fulfillment.css';

const Fulfillment = () => {
  return (
    <div className="container spacing">
      <img
        src={Header}
        alt="header"
      />
      <div>
        <h1>Fulfillment Made Easy.</h1>
        Fast, dependable order fulfillment and shipping is critical to the success of your online business. And at Jetpack, you can rest easy knowing that you're working with a trusted established partner.
      </div>
      <div className="row">
        <div className="col-md-12">
          <img
            src={Flow}
            alt="flow"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <img
            src={Trophy}
            alt="trophy"
          />
        </div>
        <div className="col-md-7">
          <h3>#1 Fulfillment Provider</h3>
          Our award-winning fulfillment center provides affordable storage, fulfillment and shipping services to online merchants of all types and sizes. Our top priority is getting your orders to your customers quickly, accurately, and to your specifications.
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <h3>Your Dedicated Partner</h3>
          We understand that there are many aspects to running a business. You need a brand, staff, products and all types of equipment just to get started. At Jetpack our business is to assist you with the printing, packaging and shipping of your products to your customers using the most efficient, cost effective and professional process possible.
        </div>
        <div className="col-md-5">
          <img
            src={Thinking}
            alt="trophy"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <img
            src={Partner}
            alt="trophy"
          />
        </div>
        <div className="col-md-7">
          <h3>Automate Your Orders.</h3>
          We also understand that every business is different. Whether you sell one product a month or large quantities every day it is critical that your customer receives their order on time, every time. That is why our fulfillment system is at the forefront of technology and seamlessly integrates your requirements into warehouse and management platform. Our fully integrated approach delivers orders direct from your website into our operation where orders are printed, packed and dispatched. It's that EASY!
        </div>
      </div>

      <ButtonQuote
        hasIcon={false}
        position="text-center"
      />
    </div>
  );
};

export default Fulfillment;