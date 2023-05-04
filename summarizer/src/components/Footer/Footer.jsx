import React from 'react'
import Logo from '../../assets/logo.png';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='logo1'>
        <img src={Logo} alt="logo" />
      </div>

      <div className='menu_items_main'>
        <ul className="nav_items_list1">
          <li>Services</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
        <ul className="nav_items_list2">
          <li>Premium Summarizer</li>
          <li>Linkedin</li>
          <li>How it Works</li>
        </ul>
        <ul className="nav_items_list3">
          <li>Free Summarizer</li>
          <li>Instagram</li>
          <li>F&Q</li>
        </ul>
        <ul className="nav_items_list4">
          <li>Pay Per use Summarizer</li>
          <li>Twitter</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <p>Copyright &c</p>
    </div>
  )
}

export default Footer