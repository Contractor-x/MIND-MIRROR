import { differenceInDays, parseISO } from 'date-fns';

export function calculateStreak(moods) {
  let streak = 0;
  let today = new Date();

  for (let i = moods.length - 1; i >= 0; i--) {
    const moodDate = parseISO(moods[i].created_at);
    const diff = differenceInDays(today, moodDate);

    if (diff === 0 || diff === streak) {
      streak += 1;
      today = moodDate;
    } else {
      break;
    }
  }

  return streak;
}
