import React, { useState } from 'react';

const TopMenu = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={process.env.PUBLIC_URL + '/Momentarium-Logo.png'}
            alt="Momentarium Logo"
            className="mr-2"
            style={{ width: '30px', height: '30px', objectFit: 'cover' }}
          />
          omentarium
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li
              className={`nav-item dropdown ${showSubmenu ? 'show' : ''}`}
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
            >
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Our Products
              </a>
              <div className={`dropdown-menu ${showSubmenu ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  AppScreen Studio
                </a>
                <a className="dropdown-item" href="#">
                  DMV Exam Prep (WA State)
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
