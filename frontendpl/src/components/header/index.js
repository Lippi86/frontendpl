import React from 'react';
import logo from '../../../src/assets/imparlogo.png';
import '../header/styles.css'

const Header = () => {
  return (
    <div>
      <div className='logo'>
          <img src={logo} alt='Logo da empresa Ímpar' className='img'/>         
      </div>
    </div>
  )
  
};

export default Header;
