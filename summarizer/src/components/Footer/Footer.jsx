import React from 'react'
import Logo from '../../assets/logo.png';
import './footer.css';

function Footer() {
  return (
    <div className="main">

    <div className='footer'>
      <div  className='name'>
      <div className='logo1'>
        <img src={Logo} alt="logo" />
      </div>
        <h3>Legal Summarizer</h3>
      </div>

      <div className='menu_items_main'>
        <ul className="nav_items_list2">
          <li><h2>Services</h2></li>
          <li>Premium Summarizer</li>
          <li>Linkedin</li>
          <li>How it Works</li>
        </ul>
        <ul className="nav_items_list3">
        <li><h2>Contact</h2></li>
          <li>Free Summarizer</li>
          <li>Instagram</li>
          <li>F&Q</li>
        </ul>
        <ul className="nav_items_list4">
        <li><h2>Support</h2></li>
          <li>Pay Per use Summarizer</li>
          <li>Twitter</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
      <div className='copyright'>
        <p>Copyright &copy; By LegalSummarizer.com | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer