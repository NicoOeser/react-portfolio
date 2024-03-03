import React, { useState } from 'react';
import './header.scss';
import OverlayInfo from '../overlay-info/overlay-info';
import OverlayContact from '../overlay-contact/overlay-contact';
import BurgerMenu from '../burgermenu/burgermenu';
import burgerMenuListIcon from '../../assets/icons/burgermenu-list.svg';
import burgerMenuXIcon from '../../assets/icons/burgermenu-x.svg';

function Header() {
  const [infoOverlayVisible, setInfoOverlayVisible] = useState(false);
  const [contactOverlayVisible, setContactOverlayVisible] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleInfoOverlay = () => {
    setInfoOverlayVisible(!infoOverlayVisible);
  };

  const toggleContactOverlay = () => {
    setContactOverlayVisible(!contactOverlayVisible);
  };

  const handleCloseOverlay = () => {
    setInfoOverlayVisible(false);
    setContactOverlayVisible(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo" translate='no'>
        <span className="header-logo-text">NO</span>
      </div>
      <nav className={`nav-links ${isBurgerMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" onClick={toggleInfoOverlay}>Contact Info</a></li>
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={toggleBurgerMenu}>
        <img className="icon" src={isBurgerMenuOpen ? burgerMenuXIcon : burgerMenuListIcon} alt="Hamburger Menu" />
      </div>
      {isBurgerMenuOpen && <BurgerMenu isOpen={isBurgerMenuOpen} toggleBurgerMenu={toggleBurgerMenu} toggleInfoOverlay={toggleInfoOverlay} toggleContactOverlay={toggleContactOverlay}/>} 
      {infoOverlayVisible && <OverlayInfo onClose={handleCloseOverlay} />}
      {contactOverlayVisible && <OverlayContact onClose={handleCloseOverlay} />}
    </header>
  );
}

export default Header;















