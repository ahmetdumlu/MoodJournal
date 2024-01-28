// Navbar.js
import React from 'react';
import LeftSection from './LeftSection';
import './Navbar.css'; // Import your component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <nav className="navbar">
      <LeftSection />
      <div className="middle-section">
        <div className="logo">Mood Journal</div>
      </div>
      {/* Right Section */}
      <div className="right-section">
        {/* Replace "Account Profile Logo" with Font Awesome user icon */}
        <div className="logo">
          {/* Optionally, you can leave this empty if you don't want any text */}
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
