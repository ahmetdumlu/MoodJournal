// JournalEntryBox.js
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import './JournalEntryBox.css';

function JournalEntryBox() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [entryText, setEntryText] = useState('');
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const quillRef = useRef(null);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image', 'video',
  ];

  const onSave = async () => {
    const entry = {
      title: title,
      date: date,
      entry_text: entryText,
      photo: uploadedPhoto,
    };

    const response = await axios.post('http://127.0.0.1:5000/create_entry', entry);
  };

  const onUploadPhoto = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://127.0.0.1:5000/upload_photo', formData);
        setUploadedPhoto(response.data.photoUrl);

        // Insert the uploaded image into the Quill editor
        const cursorPosition = quillRef.current.getEditor().getLength();
        quillRef.current.getEditor().insertEmbed(cursorPosition, 'image', response.data.photoUrl);
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    }
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
        ref={quillRef}
      />
      <div className="button-container">
        <button onClick={onSave} className="save-button">
          Save
        </button>
      </div>
    </div>
  );
}

export default JournalEntryBox;
