/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './styles.css';

const LeaderboardRow: React.FC<{
    index: number;
    style: { [key: string]: string };
    score: any;
    entered?: boolean;
}> = ({ index, style, score, entered }) => {
    const getScore = (track: string, pos: string) => {
        if (score[track] && score[track].score) {
            return (
                <span>
                    {score[track].score.score}{' '}
                    <span
                        style={{
                            color:
                                track === 'track1'
                                    ? '#1cb1d9'
                                    : track === 'track2'
                                    ? '#f8990b'
                                    : '#00CD5E',
                        }}
                    >
                        ({score[pos]})
                    </span>
                </span>
            );
        } else {
            return 'DNF';
        }
    };
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
                {getScore('track1', 'posTrack1')}
            </div>
            <div className="--score --track2">
                {getScore('track2', 'posTrack2')}
            </div>
            <div className="--score --track3">
                {getScore('track3', 'posTrack3')}
            </div>
        </div>
    );
};
export default LeaderboardRow;
