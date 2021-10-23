import leaderboards from 'data/leaderboards.json';

export function getLeaderboard(productId) {
  const leaderboard = leaderboards.find((leaderboard) => leaderboard.product_id === productId) ?? {};

  return leaderboard;
}

export function getTopThree({ entries }) {
  return entries.slice(0, 3);
}

export function getBelowTopThree({ entries }) {
  return entries.slice(3, entries.length - 1);
}
