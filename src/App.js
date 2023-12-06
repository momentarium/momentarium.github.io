import React from 'react';
import TopMenu from './TopMenu';
import MainBody from './MainBody';
import About from './About';
import Contact from './Contact';
import WaitlistWidget from './WaitlistWidget';
import Footer from './Footer';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <TopMenu className="top-menu" />
      <MainBody />
      <div className="container mt-5 wrapper">
        <div className="row">
          <div className="col-md-6">
            <About />
          </div>
          <div className="col-md-3">
          </div>
          <div className="col-md-3">
            <Contact />
          </div>
        </div>
      </div>
      <div className="container">
        <WaitlistWidget /> 
      </div>
      <Footer />
    </div>
  );
};

export default App;

