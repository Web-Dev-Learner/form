import React from 'react';

const Files = () => {
  return (
    <div className="files-page">
      <h2>Files</h2>
      <p>Upload files related to this client.</p>
      <div className="file-upload">
        <input type="file" />
      </div>
    </div>
  );
};

export default Files;
