import React from 'react';

const Files = () => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log('File selected:', file);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Files</h2>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default Files;
