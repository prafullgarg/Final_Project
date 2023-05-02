import React from 'react';
import Logo from '../../assets/logo.png';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt="logo" />
      </div>

      <div className='menu_items'>
        <ul className="nav_items_list">
          <li>Summarizer</li>
          <li>Pricing</li>
          <li>About us</li>
          <li>Blogs</li>
          <li>Button for signin/signup</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar