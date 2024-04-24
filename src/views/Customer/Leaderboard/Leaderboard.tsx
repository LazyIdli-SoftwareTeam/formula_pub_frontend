import { useState } from 'react';
import Prizes from './components/prize/Prizes';
import './styles/leaderboard.css';
import LeaderboardHeader from './components/leaderboardHeader/LeaderboardHeader';
import LeaderboardUsers from './components/leaderboardUsers/LeaderboardUsers';
import ScoreVerification from '../../../components/ScoreVerification/ScoreVerification';

export enum HEADER_STATE {
  TODAY = 'FASTEST OF TODAY',
  LEADERBOARD = 'LEADERBOARD',
}

const TABS = [HEADER_STATE.TODAY, HEADER_STATE.LEADERBOARD];
const Leaderboard = () => {
  const [headerTab, setHeaderTab] = useState<number>(0);
  const [scoreVerifyPopup, setScoreVerifyPopup] = useState(false);
  const updateTab = (index: number) => {
    setHeaderTab(index);
  };
  const showVerifyPopup = () => {
    setScoreVerifyPopup(true);
  };
  const closeVerifyPopup = () => {
    setScoreVerifyPopup(false);
  };
  return (
    <div className="customer-leader-board-container">
      {scoreVerifyPopup ? (
        <ScoreVerification closePopup={closeVerifyPopup} />
      ) : null}
      <div className="customer-leader-board-top">
        <Prizes />
        <LeaderboardHeader
          activeTabIndex={headerTab}
          tabs={TABS}
          updateTab={updateTab}
        />
      </div>
      <div className="customer-leader-board-users">
        <LeaderboardUsers
          showScoreVerifyPopup={showVerifyPopup}
          users={[
            {
              name: 'Sahil',
              phoneNumber: '231231313',
              type: 'host',
              raceCode: '12312',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
