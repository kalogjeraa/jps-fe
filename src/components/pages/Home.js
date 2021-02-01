import React from 'react';

import BootstrapCarousel from '../common/BootstrapCarousel';
import Logo from '../../images/JetPacklogo.png';

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