// Navbar.js
import React from 'react';
import LeftSection from './LeftSection';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import './Navbar.css'; // Import your component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navigate = useNavigate();

  const navigateToOnboarding = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <LeftSection />
      <div className="middle-section">
        {/* Use onClick to call navigateToOnboarding when Mood Journal is clicked */}
        <div className="logo" onClick={navigateToOnboarding}>
          Mood Journal
        </div>
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
