// Onboarding.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Onboarding.css';

function Onboarding() {
  return (
    <div className="onboarding-container">
      <div className="content-container">
        <div className="text-container">
          <h1>Welcome to MoodJournal</h1>
          <h2>Let's Start Writing Journals</h2>
          <Link to="/JournalEntryBox" className="start-button">
            Start Writing Journals
          </Link>
        </div>
        <div className="image-container">
          {/* Replace the image source with your actual image */}
          <img src="onboarding.jpg" alt="Onboarding" />
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
