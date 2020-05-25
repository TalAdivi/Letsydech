import React from 'react';
import './home.scss';
import Navbar from '../../shared/components/navbar';
import Banner from './banner';
/**
 * Nav
 * BANNER
 * Cards
 */

const Home = ():any => {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
