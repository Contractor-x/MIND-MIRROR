import React, { useState } from 'react';

const JournalEntry = ({ onSubmit }) => {
  const [entry, setEntry] = useState('');
  const [gratitude, setGratitude] = useState('');

  const handleSubmit = () => {
    if (!entry.trim()) return;
    onSubmit({ entry, gratitude });
    setEntry('');
    setGratitude('');
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-2">📝 Daily Journal</h3>
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows="4"
        placeholder="What's on your mind today?"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded mb-4"
        type="text"
        placeholder="🙏 One thing you're grateful for?"
        value={gratitude}
        onChange={(e) => setGratitude(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Save Entry
      </button>
    </div>
  );
};

export default JournalEntry;
