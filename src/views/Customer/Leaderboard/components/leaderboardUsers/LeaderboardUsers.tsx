import React from 'react';
import './styles.css';
import { FaTrophy } from 'react-icons/fa6';
import { t_userInfo } from '../../../../../types/userInfo';
const rankStyles = (index: number) => {
    if (index === 0) {
      return {
        index: {
          color: 'white',
          background:
            'linear-gradient(90deg, rgba(184, 133, 27, 0.9) 0%, rgba(210, 167, 62, 0.9) 8.33%, rgba(214, 171, 66, 0.9) 17.19%, rgba(248, 221, 123, 0.9) 31.25%, rgba(253, 237, 153, 0.9) 48.96%, rgba(251, 234, 146, 0.9) 66.15%, rgba(243, 215, 115, 0.9) 82.29%, rgba(226, 189, 86, 0.9) 91.67%, rgba(181, 128, 23, 0.9) 100%)',
        },
        root: { border: '1px solid #B8851BE5' },
      };
    } else if (index === 1) {
      return {
        index: {
          color: 'white',

          background:
            'linear-gradient(90deg, #565656 0%, #D2D2D2 0%, #989898 9.67%, #FFFFFF 69.66%, #C0C0C0 82.12%, #757575 100%)',
        },
        root: { border: '1px solid #565656' },
      };
    } else if (index == 2) {
      return {
        index: {
          color: 'white',
          background:
            'linear-gradient(90deg, #A1522C 0%, #7D3E1C 4.61%, #C76D41 17.85%, #A4512B 48.49%, #F2B192 67.69%, #E37F49 72.66%, #BD663D 87.48%, #954D2A 94.2%, #A5552F 100%)',
        },
        root: { border: '1px solid #A1522C' },
      };
    } else {
      return { index: {}, root: {} };
    }
  };
export const LeaderboardHeader = () => {
  return (
    <div className="customer-leader-board-card-header-container">
      <span className="--index">
        <FaTrophy />
      </span>
      <span className="--user-name header-name">NAME</span>
      <span className="--user-score header-score">
        <img src='/leaderboard/acute.svg' />
        TIME
      </span>
    </div>
  );
};

export const LeaderboardCard: React.FC<{
  index: number;
  userName: string;
  score: string;
}> = ({ index, score, userName }) => {

  const styles = rankStyles(index);
  return (
    <div style={styles.root} className="customer-leader-board-card-container">
      <span style={styles.index} className="--index user-index">
        {index + 1}
      </span>
      <span className="--user-name">{userName}</span>
      <span className="--user-score">{score}</span>
    </div>
  );
};

const LeaderboardUsers: React.FC<{ users: t_userInfo[] }> = ({ users }) => {
  return (
    <div className="leader-board-users-container">
      <LeaderboardHeader />
      {new Array(20).fill(0).map((_, i) => (
        <LeaderboardCard
          index={i}
          key={i}
          score="23.123.000"
          userName={users[0].name}
        />
      ))}
    </div>
  );
};

export default LeaderboardUsers;
