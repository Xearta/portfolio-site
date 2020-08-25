import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='contact-section'>
      <div className='contact-header'>
        <h2>Get In Touch</h2>
      </div>
      <div className='contact-form'>
        <form>
          <div className='contact-form-element half'>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' required></input>
          </div>

          <div className='contact-form-element half'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' required></input>
          </div>

          <div className='contact-form-element full'>
            <label htmlFor='message'>How Can I Help?</label>
            <textarea id='message' rows='7' required></textarea>
          </div>

          <div className='contact-form-element'>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
