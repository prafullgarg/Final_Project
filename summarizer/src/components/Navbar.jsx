import React from 'react';
import Logo from '../assets/logo.png';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className='logo'>
        <img src={Logo} alt="logo" />
      </div>

      <div className='others'>

      </div>
    </>
  )
}

export default Navbar