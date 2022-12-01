import './Logo.css';
import logo from '../logo.svg';
import React from 'react';

const Logo = () => {
  return (
    <div className="CartWidget">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};
export default Logo;
