import React from 'react';

import BootstrapCarousel from '../common/BootstrapCarousel';

import Logo from '../../images/JetPacklogo.png';
import MoneyWorld from '../../images/icons/icon-money-world.jpg';
import Contract from '../../images/icons/icon-pen-contract.jpg';
import Handshake from '../../images/icons/icon-handshake.jpg';
import Finance from '../../images/icons/icon-finance.jpg';

import { PARAGRAPHS as TEXT } from '../../constants/about';

const Home = () => {
  return (
    <div>
      <BootstrapCarousel />
      <img 
        src={Logo}
        alt="logo"
      />
    </div>
  )
};

export default Home;