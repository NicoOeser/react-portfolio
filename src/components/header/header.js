import React, { useState } from 'react';
import './header.scss'; 
import OverlayInfo from '../overlay-info/overlay-info';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [infoOverlayVisible, setInfoOverlayVisible] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleInfoOverlay = () => {
    setInfoOverlayVisible(!infoOverlayVisible);
  };

  const handleCloseOverlay = () => {
    setInfoOverlayVisible(false);
  };

  return (
    <header className="header">
      <div className="header-logo" translate='no'>
        <span className="header-logo-text">NO</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" onClick={toggleInfoOverlay}>Contact Info</a></li>
        </ul>
      </nav>
      <div className="mode-switcher">
        {isDarkMode ? <span className="icon">🌞</span> : <span className="icon">🌜</span>}
        <label className="switch">
          <input type="checkbox" onChange={handleModeToggle} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      {infoOverlayVisible && <OverlayInfo onClose={handleCloseOverlay} />}
    </header>
  );
}

export default Header;















