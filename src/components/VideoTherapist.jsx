
// src/components/VideoTherapist.jsx

import React, { useEffect, useState } from 'react';
import { createTavusVideo } from '../lib/tavus';

const VideoTherapist = ({ user }) => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      const url = await createTavusVideo({
        name: user.name || 'Friend',
        mood: user.mood || 'neutral'
      });
      setVideoUrl(url);
    }

    fetchVideo();
  }, [user]);

  if (!videoUrl) return <p>Loading your video therapist...</p>;

  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <video controls autoPlay width="100%">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
};

export default VideoTherapist;
