
import React, { useState } from 'react';

const Files = () => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);

  // Handle file selection through the file input
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Handle the file (upload, preview, etc.)
    }
  };

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      // Handle the file (upload, preview, etc.)
    }
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const fileUploadStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '1rem',
    backgroundColor: dragOver ? '#e0e0e0' : '#f9f9f9',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    position: 'relative',
    display: 'inline-block',
  };

  const uploadLabelStyles = {
    display: 'block',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#333',
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Files</h2>
      <p>Upload files related to this client.</p>
      <div 
        style={fileUploadStyles} 
        onDragOver={handleDragOver} 
        onDragLeave={handleDragLeave} 
        onDrop={handleDrop}
        onClick={handleClick} // Trigger file input on click
      >
        <input 
          type="file" 
          onChange={handleFileChange} 
          style={{ display: 'none' }} // Hide the default file input
          id="fileInput"
        />
        <label htmlFor="fileInput" style={uploadLabelStyles}>
          {file ? file.name : 'Drag & drop files here or click to select files'}
        </label>
      </div>
    </div>
  );
};

export default Files;

