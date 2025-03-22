import React, { useRef } from "react";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import imgLogo from "../assets/logo-white-removebg-preview.png";
// import LoginButton from "../components/ui/SepicalLoginButton.jsx";


function Header() {
  const headerRef = useRef(null);
  const location = useLocation();
  const Home = location.pathname === "/";

  return (
    <nav 
      ref={headerRef} 
      className="primary-menu"
      style={{
        backgroundColor: Home ? "#000000" : "transparent",
        borderBottom: Home ? "1px solid #a3a3a3" : "none"
      }}
    >
      <div id="logoHeader" className=" w-70">
        <a href="/">
          <img src={imgLogo} alt="" />

        </a>
      </div>
      <ul className="menu-container one-page-menu">
      <li className="menu-item">
          <Link className="menu-link link-116" to="/">
            <div>Home</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link link-116" to="/aboutus">
            <div>About us</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link link-116" to="/fusionsuite">
            <div>Fusion suite</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link link-116" to="/pricing">
            <div>Pricing</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link link-116" to="/careers">
            <div>Careers</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link link-116" to="/contact">
            <div>Contact</div>
          </Link>
        </li>
      </ul>
      {/* <button className="Login-button mt-8 mb-10 mr-15">
        <span>Log in</span>
      </button> */}
      {/* <LoginButton/> */}
     <button type="button" className="Login-button">
      <span>Login</span>
     </button>

    </nav>
  );
}

export default Header;