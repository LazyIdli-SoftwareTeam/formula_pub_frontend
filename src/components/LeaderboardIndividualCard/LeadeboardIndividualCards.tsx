import React from 'react';
import './styles.css';
import { getClassName } from '../LeaderboardRow/LeaderboardRow';

const LeaderboardIndividualCards: React.FC<{
  name: string;
  index: number;
  score: string;
}> = ({ index, name, score }) => {
    // const className = getClassName(index, true);
  return (
    <div className={`leader-board-row-overlay leader-board-individual-overlay`}>
      <div className={`leader-board-individual-card-container ${getClassName(index, false)}`}>
        <div className='--index'>
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
