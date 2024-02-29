import React, { useState } from "react";
import "../views/home.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SignIn from "./SignInModal";
import SignUp from "./SignUpModal";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (event) => {
    event.stopPropagation(); 
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-thq="thq-navbar"
      className="navbarContainer home-navbar-interactive"
    >
      <span className="logo">BizPlanner</span>
      <div data-thq="thq-navbar-nav" className="home-desktop-menu">
        <nav className="home-links">
          <Link className="bodySmall" to="/">
            Home
          </Link>
          <Link className="home-nav22 bodySmall">Features</Link>
          <Link className="home-nav32 bodySmall">Expenses</Link>
          <Link className="home-nav42 bodySmall">Challenges</Link>
          <Link className="home-nav52 bodySmall">Goals</Link>
        </nav>
        <div className="home-buttons">
          <SignIn className="home-login buttonFlat" />
          <SignUp className="buttonFilled" />
        </div>
      </div>
      <div
        data-thq="thq-burger-menu"
        className="home-burger-menu"
        onClick={toggleMobileMenu}
      >
        <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          data-thq="thq-mobile-menu"
          className="home-mobile-menu1 mobileMenu"
          onClick={toggleMobileMenu} // Close mobile menu when clicked outside
        >
          <div className="home-nav">
            <div className="home-top">
              <span className="logo">ENTREPRENEURS</span>
              <div
                data-thq="thq-close-menu"
                className="home-close-menu"
                onClick={closeMobileMenu}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="home-icon02 socialIcons"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links1">
              <Link className="home-nav121 bodySmall" to="/">
                Home
              </Link>
              <Link className="home-nav221 bodySmall" to="/features">
                Features
              </Link>
              <Link className="home-nav321 bodySmall" to="/expenses">
                Expenses
              </Link>
              <Link className="home-nav421 bodySmall" to="/challenges">
                Challenges
              </Link>
              <Link className="home-nav521 bodySmall" to="/goals">
                Goals
              </Link>
            </nav>
            {/* mobile Version */}
            <div className="home-buttons1">
              <SignIn className="home-login buttonFlat" />
              <SignUp className="buttonFilled" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
