import React from 'react';
import './overlay-info.scss';

const OverlayInfo = ({ onClose }) => {
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
                        <h3 className='info-content-h3'></h3>
                        <p className='info-content-text'></p>
                        <div className='info-content-items'>
                            <div className='info-content-item'>
                                <label>email address:</label>
                            </div>
                            <div className='info-content-item'>
                                <label>LinkedIn:</label>
                            </div>
                            <div className='info-content-item'>
                                <label>email address:</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayInfo;
