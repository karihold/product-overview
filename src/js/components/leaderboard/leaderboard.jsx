import React from 'react';
import LeaderboardUser from 'components/leaderboard-user/leaderboard-user';
import { getLeaderboard, getTopThree, getBelowTopThree } from 'utils/leaderboard';
import './leaderboard.scss';

const Leaderboard = ({ productId }) => {
  const leaderboard = getLeaderboard(productId);

  if (leaderboard.entries.length === 0) return <></>;

  const topThree = getTopThree(leaderboard);
  const belowTopThree = getBelowTopThree(leaderboard);

  return (
    <article className="leaderboard">
      <h3 className="leaderboard-title">Leaderboard</h3>
      <ol className="leaderboard-top-three">
        {topThree.map(({ user_id, username, image, score, rank }) => (
          <li key={`leaderboard-user-${user_id}`}>
            <LeaderboardUser username={username} image={image} score={score} rank={rank} />
          </li>
        ))}
      </ol>
      <ol className="leaderboard-continued">
        {belowTopThree.map(({ user_id, username, image, score, rank }) => (
          <li className="leaderboard-continued__list-item" key={`leaderboard-user-${user_id}`}>
            <LeaderboardUser username={username} image={image} score={score} rank={rank} />
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Leaderboard;
