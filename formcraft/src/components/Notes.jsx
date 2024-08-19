import React from 'react';

const Notes = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Notes</h2>
      <textarea className="w-full p-2 border rounded-lg" rows="5" placeholder="Write some notes..."></textarea>
    </div>
  );
};

export default Notes;
