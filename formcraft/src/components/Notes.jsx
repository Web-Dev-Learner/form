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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notes</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="5"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a new note..."
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleAddNote}
      >
        Add Note
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Notes List</h3>
        <ul className="list-disc pl-5">
          {notesList.map((n, index) => (
            <li key={index} className="mb-2">{n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
