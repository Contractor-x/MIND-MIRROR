import React from 'react';
import { format, parseISO } from 'date-fns';

const getColor = (mood) => {
  switch (mood) {
    case 'happy': return 'bg-green-500';
    case 'neutral': return 'bg-yellow-500';
    case 'sad': return 'bg-orange-500';
    case 'anxious': return 'bg-red-500';
    case 'angry': return 'bg-pink-600';
    default: return 'bg-gray-300';
  }
};

const MoodGrid = ({ data }) => {
  const squares = data.map(({ created_at, mood }, i) => {
    const day = format(parseISO(created_at), 'MMM d');
    return (
      <div
        key={i}
        title={`${day}: ${mood}`}
        className={`w-5 h-5 ${getColor(mood)} rounded-sm`}
      ></div>
    );
  });

  return (
    <div>
      <h3 className="text-lg font-bold mb-3">Mood Heatmap</h3>
      <div className="grid grid-cols-7 gap-1">{squares}</div>
      <p className="text-sm mt-2 text-gray-500">Based on your last 30 logs</p>
    </div>
  );
};

export default MoodGrid;
