import JournalEntry from '../components/JournalEntry';
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

  onst handleJournalSubmit = async ({ entry, gratitude }) => {
  const { data, error } = await supabase.from('journal').insert([
    {
      user_id: user.id,
      entry,
      gratitude
    }
  ]);

  if (error) console.error('Journal error:', error.message);
  else console.log('Journal saved:', data);
};

// Inside JSX:
<JournalEntry onSubmit={handleJournalSubmit} />

// Add to dashboard or JournalPage.jsx

const [journals, setJournals] = useState([]);

useEffect(() => {
  const fetchJournals = async () => {
    const { data, error } = await supabase
      .from('journal')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (!error) setJournals(data);
  };
  fetchJournals();
}, [user]);

return (
  <div className="mt-8">
    <h3 className="text-xl font-bold mb-2">📖 Past Entries</h3>
    {journals.map((j) => (
      <div key={j.id} className="bg-gray-50 p-4 rounded shadow-sm mb-2">
        <p className="text-sm text-gray-500">{new Date(j.created_at).toDateString()}</p>
        <p className="text-md mt-1">{j.entry}</p>
        {j.gratitude && <p className="text-green-600 mt-1">🙏 Grateful for: {j.gratitude}</p>}
      </div>
    ))}
  </div>
);

  
  const Dashboard = () => {
  const moods = useMoodHistory();
  const streak = calculateStreak(moods);

  
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
      <MoodTracker onMoodSubmit={handleMoodSubmit} />
      {lastMood && <p className="mt-4">✅ Mood saved: {lastMood}</p>}
    </div>

     <div className="p-6">
      <h2 className="text-xl font-bold">🔥 Current Streak: {streak} Days</h2>
      <MoodGrid data={moods.slice(-30)} />
    </div>
  );
};

export default Dashboard;
