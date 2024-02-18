import React from 'react';
import Imprint from '../imprint/imprint'; // Annahme: Imprint befindet sich in einer separaten Datei

function Footer() {
  return (
    <div className="footer-container">
      <div>Footer Content</div>
      <div>
        <Imprint />
      </div>
    </div>
  );
}

export default Footer;