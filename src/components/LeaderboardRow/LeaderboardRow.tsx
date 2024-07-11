/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './styles.css';

const LeaderboardRow: React.FC<{
    index: number;
    style: { [key: string]: string };
    score: any;
    entered?: boolean;
}> = ({ index, style, score, entered }) => {
    return (
        <div
            style={style}
            className={
                entered
                    ? `leader-board-row-container leader-board-enter`
                    : 'leader-board-row-container'
            }
        >
            <div className="--index">{index + 1}</div>
            <div className="--name">{score.name}</div>
            <div className="--score --total-score">
                {score.totalScore === 100000 ? '_' : score.totalScore}
            </div>
            <div className="--score --track1">
                {(score?.track1?.score?.score + '(' + (score.posTrack1) + ')') || 'DNF'}
            </div>
            <div className="--score --track2">
                {' '}
                {score?.track2?.score?.score + '(' + (score.posTrack2) + ')' || 'DNF'}
            </div>
            <div className="--score --track3">
                {score?.track3?.score?.score + '(' + (score.posTrack3) + ')' || 'DNF'}
            </div>
        </div>
    );
};
export default LeaderboardRow;
