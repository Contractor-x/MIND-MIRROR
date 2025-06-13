import React, { useEffect, useState } from 'react';
import { generateSpeech } from '../lib/elevenlabs';

const VoiceResponder = ({ mood, journal }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const message = `Hey, I noticed you’re feeling ${mood}. Just a reminder, your thoughts are valid. Here's something you wrote: ${journal}`;

  useEffect(() => {
    async function fetchAudio() {
      const url = await generateSpeech(message);
      setAudioUrl(url);
    }

    fetchAudio();
  }, [mood, journal]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Your Daily Voice Check-in</h3>
      {audioUrl ? (
        <audio controls autoPlay className="w-full">
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Preparing your voice response...</p>
      )}
    </div>
  );
};

export default VoiceResponder;

