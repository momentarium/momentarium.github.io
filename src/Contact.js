import React from 'react';
import instagram from './icons/instagram.svg'
import mail from './icons/mail.svg'

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact</h2>
      <p>
        <a href="https://www.instagram.com/momentarium.apps/" target="_blank" rel="noopener noreferrer">
          <img src={instagram}></img> Instagram
        </a>
      </p>
      <p>
        <a href="mailto:llc.momentarium@gmail.com">
        <img src={mail}></img> Email</a>
      </p>
    </div>
  );
};

export default Contact;
