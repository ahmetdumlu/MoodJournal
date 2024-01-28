import React from 'react';
import  Navbar  from './components/Navbar';
import  Collage  from './components/Collage';
import  DatePicker  from './components/DatePicker';
import  EntryHistory  from './components/EntryHistory';
import  JournalEntryBox  from './components/JournalEntryBox';
import  Onboarding  from './components/Onboarding';
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
          <Routes>
            <Route path="/collage" element={<Collage />} />
            <Route path="/datePicker" element={<DatePicker />} />
            <Route path="/entryHistory" element={<EntryHistory />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/JournalEntryBox" element={<JournalEntryBox />} />
            
          </Routes>

      </div>
    </div>
  );
}

export default App;
