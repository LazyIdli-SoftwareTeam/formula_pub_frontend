import React from 'react';
import './styles.css';
import { getClassName } from '../LeaderboardRow/LeaderboardRow';

const LeaderboardIndividualCards: React.FC<{
  name: string;
  index: number;
  height?: string;
  score: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  highlightAnimation?: any;
}> = ({ index, name, score, highlightAnimation, height }) => {
  console.log(highlightAnimation);

  return (
    <div
      style={{ height: height }}
      className={`leader-board-row-overlay leader-board-individual-overlay ${
        highlightAnimation && highlightAnimation.includes(index)
          ? 'high-light-blink-user'
          : highlightAnimation &&
            highlightAnimation.length > 0 &&
            !highlightAnimation.includes(index)
          ? 'non-high-light-blur'
          : ''
      } `}
    >
      <div
        className={`leader-board-individual-card-container ${getClassName(
          index,
          false
        )}`}
      >
        <div className="--index">
          <span>{index + 1}</span>
        </div>
        <div className="--name">
          <span>{name}</span>
        </div>
        <div className="--score">
          <span>{score}</span>
        </div>
      </div>
      <div className="leader-board-line"></div>
    </div>
  );
};

export default LeaderboardIndividualCards;
