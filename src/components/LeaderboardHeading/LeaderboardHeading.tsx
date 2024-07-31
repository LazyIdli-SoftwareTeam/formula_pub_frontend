import React from 'react';
import './styles.css';
const LeaderboardHeading: React.FC<{
  heading: string;
  width?: string;
}> = ({ heading, width }) => {
  return (
    <div className="leader-board-heading-container">
      {width ? null : (
        <div style={{ width: width }} className="left-lines">
          <div className="line"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      )}
      <div className="leader-board-heading">
        <span>{heading}</span>
      </div>
      {width ? null : (
        <div style={{ width: width }} className="right-lines">
          <div className="line line3"></div>
          <div className="line line2"></div>
          <div className="line"></div>
        </div>
      )}
    </div>
  );
};
export default LeaderboardHeading;
