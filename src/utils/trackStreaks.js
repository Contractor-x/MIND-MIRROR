export function updateStreak(currentStreak, lastCheckinDate) {
  const today = new Date().toDateString();
  const last = new Date(lastCheckinDate).toDateString();

  if (today === last) return currentStreak; // Already logged today
  const diff = (new Date(today) - new Date(last)) / (1000 * 3600 * 24);

  if (diff === 1) return currentStreak + 1; // Continued streak
  return 1; // Streak broken, start over
}

