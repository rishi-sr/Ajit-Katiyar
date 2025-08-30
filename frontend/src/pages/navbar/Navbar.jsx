import React, { useState } from 'react';
import './navbar.scss';

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className='logo'>
        <div className="img">
          <img src="ajit.png" alt="logo" />
        </div>
        <div className="name"><h1>Ajit Katiyar</h1></div>
      </div>

      {/* Hamburger menu */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Services</li>
          <button className={`btn ${theme}`}>Contact</button>
        </ul>
        <div className="theme">
          <button className={`change ${theme}`} onClick={toggleTheme}>
            <div className="icon">
              <img
                src={theme === "light" ? "day.png" : "night.png"}
                alt={theme === "light" ? "Light Mode" : "Dark Mode"}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
