import React from 'react';
import './style.scss';
import Trending from './taending/Trending';
import HeroBanner from './heroBanner/HeroBanner';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <div style={{height:"1000px"}}></div>
    </div>
  )
}

export default Home
