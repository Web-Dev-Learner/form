import React, { useRef, useState } from 'react';

const Files = () => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("File selected:", selectedFile); // Debugging: Check if a file is selected
    if (selectedFile) {
      setFile(selectedFile);
      console.log("File name:", selectedFile.name); // Debugging: Verify file name
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
    console.log("Dragging over"); // Debugging: Confirm drag over event
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
    console.log("Dragging left"); // Debugging: Confirm drag leave event
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    console.log("File dropped:", droppedFile); // Debugging: Confirm file drop
    if (droppedFile) {
      setFile(droppedFile);
      console.log("Dropped file name:", droppedFile.name); // Debugging: Verify dropped file name
    }
  };

  const handleClick = () => {
    // console.log("File input clicked"); // Debugging: Confirm input click event
    fileInputRef.current.click();
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      
      <p>Upload files related to this client.</p>
      <div
        style={{
          border: dragOver ? '2px solid #000' : '2px dashed #ccc',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: dragOver ? '#e0e0e0' : '#f9f9f9',
          cursor: 'pointer',
          textAlign: 'center',
          transition: 'background-color 0.3s, border-color 0.3s',
          position: 'relative',
          display: 'inline-block',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <label style={{ display: 'block', cursor: 'pointer', fontSize: '1rem', color: '#333' }}>
          {file ? file.name : 'Drag & drop files here or click to select files'}
        </label>
      </div>
      {file && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Selected File:</h3>
          <p>{file.name}</p>
        </div>
      )}
    </div>
  );
};

export default Files;


