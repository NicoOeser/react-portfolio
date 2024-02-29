import React, { useEffect } from 'react';
import './overlay-imprint.scss';

const OverlayImprint = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector('.code-overlay-imprint-modal');
      if (modal && !modal.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`overlay-imprint-active overlay-imprint`}>
      <div className="code-overlay-imprint-modal code-overlay-imprint-modal-active code-overlay-imprint-modal-imprint">
        <div className='code-imprint-bar'>
          <div className='close-imprint-btn' onClick={onClose}>X</div>
          <div className='code-imprint-bar-dots-container'>
            <div className='code-imprint-bar-dots red-dot'></div>
            <div className='code-imprint-bar-dots yellow-dot'></div>
            <div className='code-imprint-bar-dots green-dot'></div>
          </div>
        </div>
        <div className='imprint-content' translate='yes'>
          <div className='imprint-content-wrapper' translate='yes'>
            <h3 className='imprint-content-h3'>Imprint</h3>
            <p className='imprint-content-text'>Information according to § 5 TMG</p>
            <div className='imprint-content-items'>
              <div className='imprint-content-item'>
                <label>
                  <p>Nicolas Oeser<br />
                    Am Blumenhof 19<br />
                    53783 Eitorf</p><br />
                    <br />
                  <h2>Kontakt</h2>
                  <br />
                  <p>Telefon: 01626250849<br />
                    E-Mail: kontakt@nicolas-oeser.de</p><br />
                    <br />
                  <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OverlayImprint;