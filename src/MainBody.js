import React from 'react';
import './MainBody.css';

const MainBody = () => {
  return (
    <div className="main-image-container">
      <img src={process.env.PUBLIC_URL + '/main-img.jpeg'} alt="Your Company" className="img-fluid main-image" />
      <div className="overlay">
        <div className="container text-center">
          <p className="mt-3">Ship Apps with style</p>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
