import React from "react";
import Logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo_container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
          <h3>Legal Summarizer</h3>
      </div>

      <div className="menu_items">
        <ul className="nav_items_list">
          <li>
            {" "}
            <a href="#summarizer"> Summarizer </a>
          </li>
          <li>Pricing</li>
          <li>About us</li>
          <li>Blogs</li>
          <li>
            <button>
              <a href="/">SignIn/SignUp</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
