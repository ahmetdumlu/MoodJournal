import React from 'react';
import './EntryHistory.css';

const EntryHistory = () => {
  // Dummy data for testing
  const entryHistory = [
    { id: 1, title: 'Entry 1', date: '2022-01-01', label: 'Happy' },
    { id: 2, title: 'Entry 2', date: '2022-01-05', label: 'Neutral' },
    { id: 3, title: 'Entry 3', date: '2022-01-10', label: 'Sad' },
    // Add more dummy data as needed
  ];

  return (
    <div className="entry-history-wrapper">
      <div className="entry-history-container">
        <div className="entry-header">
          <div>Title</div>
          <div>Date</div>
          <div>Happy Score</div>
        </div>
        {entryHistory.map((entry) => (
          <div key={entry.id} className="entry-entry">
            <div>{entry.title}</div>
            <div>{entry.date}</div>
            <div>{entry.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryHistory;
