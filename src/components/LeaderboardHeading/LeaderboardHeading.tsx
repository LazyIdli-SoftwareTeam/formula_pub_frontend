import React from 'react';
import './styles.css';
const LeaderboardHeading: React.FC<{
    heading: string;
}> = ({ heading }) => {
    return (
        <div className="leader-board-heading-container">
            <div className="left-lines">
                <div className="line"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <div className="leader-board-heading">
                <span>{heading}</span>
            </div>
            <div className="right-lines">
                <div className="line line3"></div>
                <div className="line line2"></div>
                <div className="line"></div>
            </div>
        </div>
    );
};
export default LeaderboardHeading;
