/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './styles.css';

export const getClassName = (index: number, indexVal: boolean) => {
  let general = '--index ';
  general += indexVal ? '--winning-index ' : '';
  if (index == 0) {
    general += '--index-one';
  } else if (index === 1) {
    general += '--index-two';
  } else if (index === 2) {
    general += '--index-three';
  }
  return general;
};

const GetIndex: React.FC<{ index: number }> = ({ index }) => {
  const className = getClassName(index, true);
  if (index <= 2) {
    return <div className={className}>{index + 1}</div>;
  }

  return <div className="--index">{index}</div>;
};

const LeaderboardRow: React.FC<{
  index: number;
  style: { [key: string]: string };
  score: any;
  entered?: boolean;
}> = ({ index, style, score, entered }) => {
  const getScore = (track: string, pos: string) => {
    if (score[track] && score[track].score) {
      return (
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {score[track].score.score}{' '}
          <span style={{ color: '#1cb1d9', fontSize: '20px', transform: 'scale(1.04)' }}>
            ({score[pos]})
          </span>
        </span>
      );
    } else {
      return 'DNF';
    }
  };
  return (
    <div className={`leader-board-row-overlay `}>
      <div
        style={style}
        className={
          entered
            ? `leader-board-row-container leader-board-enter ` +
              getClassName(index, false)
            : 'leader-board-row-container ' + getClassName(index, false)
        }
      >
        <GetIndex index={index} />
        <div className="--name">{score.name}</div>
        <div className="--score --total-score">
          {score.totalScore === 100000 ? '_' : score.totalScore}
        </div>
        <div className="--score --track1">
          {getScore('track1', 'posTrack1')}
        </div>
        <div className="--score --track2">
          {getScore('track2', 'posTrack2')}
        </div>
        <div className="--score --track3">
          {getScore('track3', 'posTrack3')}
        </div>
      </div>
      <div className="leader-board-line"></div>
    </div>
  );
};
export default LeaderboardRow;
