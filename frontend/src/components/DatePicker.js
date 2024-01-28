// DatePicker.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DatePicker.css';

const yearsList = Array.from({ length: new Date().getFullYear() - 1949 }, (_, index) => new Date().getFullYear() - index);

const TimelineBox = ({ year, onClick }) => {
  return (
    <div className="timeline-box" onClick={onClick}>
      <h3>{year}</h3>
      {/* Add your timeline content here */}
    </div>
  );
};

const DatePicker = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const navigate = useNavigate();

  const handleTimelineBoxClick = (year) => {
    // Navigate to /collage when the specific box is clicked
    if (year === 2024) {
      navigate('/collage');
    }
    // You can add more conditions for other years if needed
  };

  return (
    <div className="datepicker-container">
      <div className="datepicker-wrapper">
        <div className="slider-container">
          <label>Year:</label>
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="All">All</option>
            {yearsList.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
    
        <div className="timeline-grid">
          <TimelineBox year={2022} onClick={() => handleTimelineBoxClick(2022)} />
          <TimelineBox year={2023} onClick={() => handleTimelineBoxClick(2023)} />
          <TimelineBox year={2024} onClick={() => handleTimelineBoxClick(2024)} />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
