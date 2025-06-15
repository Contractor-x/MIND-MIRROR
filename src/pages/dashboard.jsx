import { supabase } from '../lib/supabaseClient';
import MoodTracker from '../components/MoodTracker';
import { useUser } from '@supabase/auth-helpers-react'; // optional if using Supabase auth

const Dashboard = () => {
  const user = useUser(); // Assumes you're using Supabase Auth
  const [lastMood, setLastMood] = useState(null);

  const handleMoodSubmit = async (mood) => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    const { data, error } = await supabase.from('mood').insert([
      {
        user_id: user.id,
        mood: mood
      }
    ]);

    if (error) {
      console.error('Error saving mood:', error.message);
    } else {
      console.log('Mood saved:', data);
      setLastMood(mood);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
      <MoodTracker onMoodSubmit={handleMoodSubmit} />
      {lastMood && <p className="mt-4">✅ Mood saved: {lastMood}</p>}
    </div>
  );
};

export default Dashboard;
