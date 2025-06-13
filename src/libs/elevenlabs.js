const ELEVEN_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVEN_VOICE_ID = 'your_voice_id'; // Customize per user later

export async function generateSpeech(text) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE_ID}`, {
    method: 'POST',
    headers: {
      'xi-api-key': ELEVEN_API_KEY,
      'Content-Type': 'application/json',
      'accept': 'audio/mpeg'
    },
    body: JSON.stringify({
      text: text,
      voice_settings: {
        stability: 0.4,
        similarity_boost: 0.8
      }
    })
  });

  const blob = await response.blob();
  return URL.createObjectURL(blob); // Use this in <audio src={...} />
}
