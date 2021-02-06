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

const Home = () => {
  return (
    <div>
      <BootstrapCarousel />
      <div className="logo-box">
        <img 
          src={Logo}
          alt="logo"
          className="logo-home"
        />
        <span className="line"/>
      </div>

      <Row>
        <GridIcon
          image={MoneyWorld}
          title={grid.fulfillment.title}
          text={grid.fulfillment.text}
        />
        <GridIcon
          image={Contract}
          title={grid.contract.title}
          text={grid.contract.text}
        />
      </Row>
      <Row>
        <GridIcon
          image={Handshake}
          title={grid.partner.title}
          text={grid.partner.text}
        />
        <GridIcon
          image={Finance}
          title={grid.finance.title}
          text={grid.finance.text}
        />
      </Row>
    </div>
  )
};

export default Home;