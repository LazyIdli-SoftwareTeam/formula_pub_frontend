import "./style.css"
import { FaTrophy } from 'react-icons/fa6';
import { t_userInfo } from '../../../../../types/userInfo';

export const PersonalLeaderboardHeader = () => {
  return (
    <div className="personal-leader-board-card-header-container">
      <span className="personal--index-icon new-index">
        <FaTrophy />
      </span>
      <span className="personal--user-name-icon personal-header-name">NAME</span>
      <span className="personal--user-score-icon personal-header-score">
        <img src='/leaderboard/acute.svg' />
        TIME
      </span>
    </div>
  );
};
export const PersonalBestCard: React.FC<{
  index: number;
  userName: string;
  score: string;
  interval:boolean;
 
}> = ({ index, score, userName,interval}) => {
  return (
    <div  className="personal-leader-board-card-container">
      <span className="personal--index personal-user-index">
        {index + 1}
      </span>
      <span className="personal--user-name">{userName}</span>
      <span className="personal--user-score">{score}</span>
      <span className="personal--user-interval">{interval ?'+00.24':''}</span>
    </div>
  );
};




export const PersonalBestUsers: React.FC<{ users: t_userInfo[] }> = ({ users }) => {
    return (
      <div className="leader-board-users-container">
       
        {new Array(9).fill(0).map((_, i) => (
          <PersonalBestCard
            index={i}
            key={i}
            score="1:24:000"
            userName={users[0].name} 
            interval={true} 
          />
        ))}
      </div>
    );
  }; 
