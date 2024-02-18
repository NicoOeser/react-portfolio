import React, { useState } from 'react';
import './header.scss'; // Importiere die header.scss-Datei für das Styling

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <span className="header-logo-text">NO</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Info</a></li>
        </ul>
      </nav>
      <div className="mode-switcher">
        {isDarkMode ? <span className="icon">🌞</span> : <span className="icon">🌜</span>}
        <label className="switch">
          <input type="checkbox" onChange={handleModeToggle} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;











