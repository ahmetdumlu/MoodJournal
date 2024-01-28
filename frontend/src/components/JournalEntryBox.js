// JournalEntryBox.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import './JournalEntryBox.css'; // Import your component-specific styles

function JournalEntryBox() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [entryText, setEntryText] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image', 'video'
  ];

  const onSave = async () => {
    const entry = {
      title: title,
      date: date,
      entry_text: entryText.substring(3, entryText.length - 4)
    };

    const response = await axios.post('http://127.0.0.1:5000/create_entry', entry);
  };

  const onUploadPhoto = () => {
    // Handle photo upload logic
    console.log("Upload Photo button clicked");
  };

  return (
    <div className="journal-entry">
      <input
        type="text"
        className="entry-title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="entry-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <ReactQuill
        className="entry-text"
        value={entryText}
        onChange={setEntryText}
        modules={modules}
        formats={formats}
        placeholder="Your journal entry..."
      />
      <div className="button-container">
        <button onClick={onSave} className="save-button">
          Save
        </button>
        <button onClick={onUploadPhoto} className="upload-photo-button">
          Upload Photo
        </button>
      </div>
    </div>
  );
}

export default JournalEntryBox;
