// LeftSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCalendarDays, faList } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LeftSection = () => {
  const navigate = useNavigate();

  return (
    <div className="left-section">
      {/* Entry Icon Content */}
      <div className="logo" onClick={() => navigate('/JournalEntryBox')}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>

      {/* Date Picker Content */}
      <div className="logo" onClick={() => navigate('/datepicker')}>
        <FontAwesomeIcon icon={faCalendarDays} />
      </div>

      {/* Entry History Content */}
      <div className="logo" onClick={() => navigate('/entryHistory')}>
        <FontAwesomeIcon icon={faList} />
      </div>
    </div>
  );
};

export default LeftSection;
