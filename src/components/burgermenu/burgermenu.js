// BurgerMenu.js
import React from 'react';
import './burgermenu.scss';

const BurgerMenu = ({ isOpen, toggleBurgerMenu, toggleInfoOverlay, toggleContactOverlay }) => {
  const handleContactInfoClick = () => {
    toggleBurgerMenu(); 
    toggleInfoOverlay(); 
  };

  const handleSendMessageClick = () => {
    toggleBurgerMenu(); 
    toggleContactOverlay(); 
  };

  const handleLinkClick = () => {
    toggleBurgerMenu(); 
  };

  return (
    <div className={`burger-menu-overlay ${isOpen ? 'overlay-active' : ''}`} onClick={toggleBurgerMenu}>
      <div className='burger-menu reveal' translate='yes'>
        <a href="#about-me" className='burger-menu-label' onClick={handleLinkClick}>About me</a>
        <a href="#skills" className='burger-menu-label' onClick={handleLinkClick}>Skills</a>
        <a href="#projects" className='burger-menu-label' onClick={handleLinkClick}>Projects</a>
        <a href="#contact" className='burger-menu-label' onClick={handleContactInfoClick}>Contact Info</a>
        <a href="#contact" className='burger-menu-label'onClick={handleSendMessageClick}>Send message</a>
      </div>
    </div>
  );
};

export default BurgerMenu;



