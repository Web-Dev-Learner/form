import React, { useState } from 'react';

const Notes = () => {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotesList([...notesList, note]);
      setNote('');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Notes</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a new note..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        rows="4"
      ></textarea>
      <button
        onClick={handleAddNote}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add Note
      </button>
      <div className="mt-4">
        {notesList.map((note, index) => (
          <div key={index} className="p-2 border border-gray-300 rounded-lg mb-2">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
