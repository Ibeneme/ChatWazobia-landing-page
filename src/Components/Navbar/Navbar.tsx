import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import VerifiedIcon from "../Icons/Verified";
import BurgerIcon from "../Icons/BurgerIcon"; // Assume this is an SVG or icon component for the burger menu

interface NavbarProps {
  logoSrc: string; // Logo image source
  openModal: () => void; // Add the openModal function prop
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, openModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the dropdown menu visibility

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div className="navbar-left" onClick={() => navigate("/")}>
        <img src={logoSrc} alt="Logo" className="navbar-logo" />
        <span className="navbar-text">Chat WaZoBia AI</span>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="navbar-middle">
        <Link to="/" className={`nav-link ${getNavLinkClass("/")}`}>
          Home
        </Link>
        <Link to="/about" className={`nav-link ${getNavLinkClass("/about")}`}>
          About
        </Link>
        <Link to="/faqs" className={`nav-link ${getNavLinkClass("/faqs")}`}>
          FAQs
        </Link>
        {/* Added Terms and Conditions and Privacy Policy Links */}
        <Link to="/terms" className={`nav-link ${getNavLinkClass("/terms")}`}>
          T & C
        </Link>
        <Link
          to="/privacy-policy"
          className={`nav-link ${getNavLinkClass("/privacy-policy")}`}
        >
          Privacy Policy
        </Link>
      </div>

      {/* Right Section: Join Waitlist Button */}
      <div className="navbar-right">
        <button className="join-button" onClick={openModal}>
          <VerifiedIcon width={24} height={24} />
          Join Our Waitlist
        </button>
      </div>

      {/* Burger Icon for Mobile View */}
      <div className="burger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <BurgerIcon width={32} height={32} color="#D8D5D1" />
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <Link
            to="/"
            className={`dropdown-link ${getNavLinkClass("/")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`dropdown-link ${getNavLinkClass("/about")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/faqs"
            className={`dropdown-link ${getNavLinkClass("/faqs")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQs
          </Link>
          {/* Added Dropdown Links for Terms and Privacy */}
          <Link
            to="/terms"
            className={`dropdown-link ${getNavLinkClass("/terms")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className={`dropdown-link ${getNavLinkClass("/privacy-policy")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;