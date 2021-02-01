import React from 'react';

import BootstrapCarousel from '../common/BootstrapCarousel';

import Logo from '../../images/JetPacklogo.png';
import MoneyWorld from '../../images/icons/icon-money-world.jpg';
import Contract from '../../images/icons/icon-pen-contract.jpg';
import Handshake from '../../images/icon/icon-handshake.jpg';


const Home = () => {
  return (
    <div>
      <BootstrapCarousel />
      <img 
        src={Logo}
        alt="logo"
      />
      <div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={MoneyWorld}
              alt="money"
            />
          </div>
          <div className="col-md-6">
            <img
              src={MoneyWorld}
              alt="money"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={MoneyWorld}
              alt="money"
            />
          </div>
          <div className="col-md-6">
            <img
              src={MoneyWorld}
              alt="money"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;