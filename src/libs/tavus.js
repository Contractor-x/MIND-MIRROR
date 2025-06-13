// src/lib/tavus.js

const TAVUS_API_URL = 'https://api.tavus.io/video';
const TAVUS_API_KEY = process.env.TAVUS_API_KEY;

export async function createTavusVideo({ name, mood }) {
  const payload = {
    template_id: 'your_template_id', // From your Tavus dashboard
    variables: {
      name: name,
      mood: mood
    }
  };

  const response = await fetch(TAVUS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': TAVUS_API_KEY
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  return data?.video_url; // Save to user session or DB
}

