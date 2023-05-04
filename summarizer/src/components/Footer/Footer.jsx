import React from 'react'
import Logo from '../../assets/logo.png';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={Logo} alt="logo" />
      </div>

      <div className='menu_items'>
        <ul className="nav_items_list">
          <li>Services</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
        <ul className="nav_items_list">
          <li>Premium Summarizer</li>
          <li>Linkedin</li>
          <li>How it Works</li>
        </ul>
        <ul className="nav_items_list">
          <li>Free Summarizer</li>
          <li>Instagram</li>
          <li>F&Q</li>
        </ul>
        <ul className="nav_items_list">
          <li>Pay Per use Summarizer</li>
          <li>Twitter</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer