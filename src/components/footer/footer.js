import React from 'react';
import './footer.scss';
import Imprint from '../imprint/imprint'; 

function Footer() {
  return (
    <div className="section section-footer reveal">
      <div>Footer Content</div>
      <div>
        <Imprint />
      </div>
    </div>
  );
}

export default Footer;