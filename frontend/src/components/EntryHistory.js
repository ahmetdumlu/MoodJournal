import React, { useState, useEffect } from 'react';
import './EntryHistory.css';
import axios from 'axios';

const EntryHistory = () => {
  // Dummy data for testing
  const [entryHistory, setEntryHistory] = useState([]);

  useEffect(() => {
    // Function to fetch entry history data
    const fetchEntryHistory = async () => {
      try {
        // Replace '/api/entries' with your actual backend endpoint
        const response = await axios.get('http://127.0.0.1:5000/get_entries');
        console.log(response.data);
        setEntryHistory(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching entry history:', error);
        // Handle error, e.g., by setting an error state or displaying a message
      }
    };

    fetchEntryHistory(); // Call the fetch function
  }, []);

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
