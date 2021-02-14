import React from 'react';

import BootstrapCarousel from '../common/BootstrapCarousel';
import Row from  '../common/utilities/Row';
import GridIcon from '../common/GridIcon';

import Logo from '../../images/JetPacklogo.png';
import MoneyWorld from '../../images/icons/icon-money-world.jpg';
import Contract from '../../images/icons/icon-pen-contract.jpg';
import Handshake from '../../images/icons/icon-handshake.jpg';
import Finance from '../../images/icons/icon-finance.jpg';

import '../../styles/home.css';

const grid = require('../../data/home.json');

const {
  fulfillment,
  contract,
  partner,
  finance
} = grid;

const Home = () => {
  return (
    <>
      <BootstrapCarousel />
      <div className="logo-box">
        <img 
          src={Logo}
          alt="logo"
          className="logo-home"
        />
        <span className="line"/>
      </div>

      <div className="container">
        <Row>
          <GridIcon
            image={MoneyWorld}
            title={fulfillment.title}
            text={fulfillment.text}
          />
          <GridIcon
            image={Contract}
            title={contract.title}
            text={contract.text}
          />
        </Row>
        <Row>
          <GridIcon
            image={Handshake}
            title={partner.title}
            text={partner.text}
          />
          <GridIcon
            image={Finance}
            title={finance.title}
            text={finance.text}
          />
        </Row>
      </div>
    </>
  )
};

export default Home;