import React from 'react';
import './styles.css';

const LeaderboardIndividualCards: React.FC<{
    name: string;
    index: number;
    score: string;
}> = ({ index, name, score }) => {
    return (
        <div className="leader-board-individual-card-container">
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
    );
};

export default LeaderboardIndividualCards;
