import React from 'react'
import BannerSlider from '../components/BannerSlider/BannerSlider';
import AboutComponent from '../components/About/AboutComponent';
import ScientificPublication from '../components/ScientificPublication/ScientificPublication';
import Chambers from '../components/Chambers/Chambers';

const Home = () => {
  return (
    <div className="homepage">
      <BannerSlider />
      <AboutComponent />
      <Chambers />
      <ScientificPublication />
    </div>
  )
}

export default Home;