import React, { useState } from 'react';

const moodOptions = [
  { mood: 'happy', emoji: '😄' },
  { mood: 'neutral', emoji: '😐' },
  { mood: 'sad', emoji: '😔' },
  { mood: 'anxious', emoji: '😰' },
  { mood: 'angry', emoji: '😡' }
];

const MoodTracker = ({ onMoodSubmit }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSubmit = () => {
    if (selectedMood) onMoodSubmit(selectedMood);
  };

  return (
    <div className="p-4 rounded-md bg-white shadow-md text-center">
      <h3 className="text-lg font-bold mb-2">How are you feeling today?</h3>
      <div className="flex justify-center gap-4 my-4">
        {moodOptions.map((option) => (
          <button
            key={option.mood}
            className={`text-4xl hover:scale-110 transition ${
              selectedMood === option.mood ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedMood(option.mood)}
          >
            {option.emoji}
          </button>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit Mood
      </button>
    </div>
  );
};

export default MoodTracker;

