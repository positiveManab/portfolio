import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/react.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="React Logo" className="logo" />

        <ul className="nav-menu">
          <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} offset={-70}>About Me</Link></li>
          <li><Link to="services" smooth={true} duration={500} offset={-70}>Services</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} offset={-70}>Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
        </ul>

        <div className="nav-connect">Connect</div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleSidebar}>
          <FaBars size={24} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <FaTimes className="close-icon" size={24} onClick={closeSidebar} />

        <ul className="sidebar-menu">
          <li><Link to="home" onClick={closeSidebar} smooth={true} duration={500} offset={-70}>Home</Link></li>
          <li><Link to="about" onClick={closeSidebar} smooth={true} duration={500} offset={-70}>About Me</Link></li>
          <li><Link to="services" onClick={closeSidebar} smooth={true} duration={500} offset={-70}>Services</Link></li>
          <li><Link to="portfolio" onClick={closeSidebar} smooth={true} duration={500} offset={-70}>Portfolio</Link></li>
          <li><Link to="contact" onClick={closeSidebar} smooth={true} duration={500} offset={-70}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
