import React from 'react';
import './leaderboard-user.scss';

const LeaderboardUser = ({ username, image, score, rank }) => {
  return (
    <article className={`leaderboard-user ${rank < 4 ? 'leaderboard-user--is-top-three' : ''}`}>
      <p className="leaderboard-user__rank">{rank}</p>
      <img className="leaderboard-user__image" src={image} />
      <p className="leaderboard-user__username">{username}</p>
      <p className="leaderboard-user__score">{score}</p>
    </article>
  );
};

export default LeaderboardUser;
