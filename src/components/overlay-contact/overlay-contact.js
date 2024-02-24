import React, { useState } from 'react';
import './overlay-contact.scss';

const OverlayContact = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [badInputs, setBadInputs] = useState([]);
  const [error, setError] = useState(false);
  const [submitText, setSubmitText] = useState('Submit');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (value.trim() !== '') {
      setBadInputs(prevState => prevState.filter(input => input !== name));
    }

    if (name === 'email' && validateEmail(value)) {
      setError(false);
      setSubmitText('Submit');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = Object.entries(formData)
      .filter(([key, value]) => key !== 'company' && value.trim() === '')
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      setBadInputs(emptyFields);
    } else {
      if (!validateEmail(formData.email)) {
        setError(true);
        setSubmitText('Error');
        return;
      }

      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('company', formData.company);
      fd.append('email', formData.email);
      fd.append('message', formData.message);

      try {
        await fetch('https://formspree.io/f/mpzgevdq', {
          method: 'POST',
          body: fd,
          headers: {
            'Accept': 'application/json'
          }
        });

        setSubmitText('Sent');
        setFormData({
          name: '',
          company: '',
          email: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitText('Submit');
        }, 3000);
      } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        setSubmitText('Error');
      }
    }
  };

  return (
    <div className={`overlay-active overlay`}>
      <div className="code-overlay-modal code-overlay-modal-active code-overlay-modal-contact">
        <div className='code-bar'>
          <div className='close-btn' onClick={onClose}>X</div>
          <div className='code-bar-dots-container'>
            <div className='code-bar-dots red-dot'></div>
            <div className='code-bar-dots yellow-dot'></div>
            <div className='code-bar-dots green-dot'></div>
          </div>
        </div>
        <form className='contact-me-form' onSubmit={handleSubmit} translate="yes">
          <div className='contact-me-form-text'>
            <h3 className='form-h3'>Hey there!</h3>
            <p className='form-text'>
              Please send me a message if you have any questions or comments. I will contact you through the email you provided me. Thank you!
            </p>
          </div>
          <input className={`contact-me-form-input ${badInputs.includes('name') ? 'bad-input' : ''}`} name='name' type='text' placeholder='Name' value={formData.name} onChange={handleInputChange}></input>
          <input className={`contact-me-form-input`} name='company' type='text' placeholder='Company name (optional)' value={formData.company} onChange={handleInputChange}></input>
          <input className={`contact-me-form-input ${badInputs.includes('email') || error ? 'bad-input' : ''}`} name='email' type='text' placeholder='Email' value={formData.email} onChange={handleInputChange}></input>
          <textarea className={`contact-me-form-input contact-me-form-message ${badInputs.includes('message') ? 'bad-input' : ''}`} name='message' placeholder='Enter your message' value={formData.message} onChange={handleInputChange}></textarea>
          <div className='form-btn-container'>
            <button className='form-btn' type='submit'>
              <div className="form-btn-status-container">
                <p className="form-btn-submit-text" style={{ transform: 'unset' }}>{submitText}</p>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OverlayContact;














