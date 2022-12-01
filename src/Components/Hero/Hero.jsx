import React from 'react';
import videoBg from'../video/videoBg.mp4';
import './Hero.css';



const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
        <video autoPlay loop muted>
            <source src={videoBg} type="video/mp4"/> 
        </video>
      
    </div>
  );
};

export default Hero;