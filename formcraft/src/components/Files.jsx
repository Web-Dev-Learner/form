import React, { useRef, useState } from 'react';

const Files = () => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

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
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-4 text-center">
      <p>Upload files related to this client.</p>
      <div
        className={`border-2 ${dragOver ? 'border-black bg-gray-200' : 'border-dashed border-gray-300 bg-gray-50'} rounded p-4 cursor-pointer text-center transition-all relative inline-block`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <label className="block cursor-pointer text-gray-800 text-lg">
          {file ? file.name : 'Drag & drop files here or click to select files'}
        </label>
      </div>
      {file && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Selected File:</h3>
          <p className="text-gray-700">{file.name}</p>
        </div>
      )}
    </div>
  );
};

export default Files;



