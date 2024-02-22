import React from 'react';
import './vertical-banner.scss';
import envelope from '../../assets/icons/envelope.svg';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import phone from '../../assets/icons/phone-vibrate.svg';

function VerticalBanner() {
  return (
    <div className="vertical-banner-left">
      <ul className="vertical-banner-left-icons">
        <li>
          <a href="https://github.com/NicoOeser" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub Icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nicolas-oeser/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a href="mailto:kontakt@nicolas-oeser.de" target="_blank" rel="noopener noreferrer">
            <img src={envelope} alt="Envelope Icon" />
          </a>
        </li>
        <li>
          <a href="tel:+49 162 6250849" target="_blank" rel="noopener noreferrer">
            <img src={phone} alt="Phone Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default VerticalBanner;

