import React, { useState } from 'react';
import './footer.scss';
import OverlayContact from '../overlay-contact/overlay-contact';
import OverlayImprint from '../overlay-imprint/overlay-imprint';
import up from '../../assets/icons/arrow-up-icon.svg';
import message from '../../assets/icons/chat-text-icon.svg';
import link from '../../assets/icons/link-icon.svg';



function Footer() {
  const [contactOverlayVisible, setContactOverlayVisible] = useState(false);
  const [imprintOverlayVisible, setImprintOverlayVisible] = useState(false);

  const toggleContactOverlay = () => {
    setContactOverlayVisible(!contactOverlayVisible);
  };


  const toggleImprintOverlay = () => {
    setImprintOverlayVisible(!imprintOverlayVisible);
  };

  const handleCloseOverlay = () => {
    setContactOverlayVisible(false);
    setImprintOverlayVisible(false);
  };



  const openGithub = () => {
    window.open('https://github.com/NicoOeser/react-portfolio', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="section section-footer reveal">
      {contactOverlayVisible && <OverlayContact onClose={handleCloseOverlay} />}
      {imprintOverlayVisible && <OverlayImprint onClose={handleCloseOverlay} />}
      <h2 className='footer-main-text'>Thanks for visiting!</h2>
      <div className='footer-wrapper'>
        <div className='footer-links'>
          <div className='footer-links-subgroup'>
            <div className='footer-link-wrapper'>
              <div className='footer-link-item footer-link-item-top' onClick={scrollToTop}>
                <img className='footer-icon' src={up} alt="Up arrow" />
                <label className='footer-link'>Back to top</label>
              </div>
            </div>
          </div>
          <div className='footer-links-subgroup'>
            <div className='footer-link-wrapper'>
              <div className='footer-link-item footer-link-item-send-message' onClick={toggleContactOverlay}>
                <img className='footer-icon' src={message} alt="Send message" />
                <label className='footer-link'>Send message</label>
              </div>
              <div className='footer-link-item footer-link-item-git' onClick={openGithub}>
                <img className='footer-icon' src={link} alt="website github" />
                <label className='footer-link'>Website Github</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright' translate='no'>
        <p className='copyright-text'>
          © 2024 by Nicolas Oeser | All rights reserved | {' '}
          <span onClick={toggleImprintOverlay} className="imprint-link">Imprint</span>
        </p>
      </div>

    </div>
  );
}

export default Footer;
