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
          <a href="https://github.com/">
            <img src={github} alt="GitHub Icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a href="mailto:your@email.com">
            <img src={envelope} alt="Envelope Icon" />
          </a>
        </li>
        <li>
          <a href="tel:+123456789">
            <img src={phone} alt="Phone Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}


export default VerticalBanner;

