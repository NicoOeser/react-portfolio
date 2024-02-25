import React, { useEffect } from 'react';
import './overlay-info.scss';

const OverlayInfo = ({ onClose }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            const modal = document.querySelector('.code-overlay-info-modal');
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
        <div className={`overlay-info-active overlay-info`}>
            <div className="code-overlay-info-modal code-overlay-info-modal-active code-overlay-info-modal-contact">
                <div className='code-info-bar'>
                    <div className='close-info-btn' onClick={onClose}>X</div>
                    <div className='code-info-bar-dots-container'>
                        <div className='code-info-bar-dots red-dot'></div>
                        <div className='code-info-bar-dots yellow-dot'></div>
                        <div className='code-info-bar-dots green-dot'></div>
                    </div>
                </div>
                <div className='info-content' translate='yes'>
                    <div className='info-content-wrapper' translate='yes'>
                        <h3 className='info-content-h3'>Hi, Nico here!</h3>
                        <p className='info-content-text'>These are the ways you can contact me</p>
                        <div className='info-content-items'>
                            <div className='info-content-item'>
                                <label>email address:</label>
                                <a href="mailto:kontakt@nicolas-oeser.de" target="_blank" rel="noopener noreferrer">
                                    <p>kontakt@nicolas-oeser.de</p>
                                </a>
                            </div>
                            <div className='info-content-item'>
                                <label>LinkedIn:</label>
                                <a href="https://www.linkedin.com/in/nicolas-oeser/" target="_blank" rel="noopener noreferrer">
                                    <p>Mein LinkedIn Profil</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayInfo;
