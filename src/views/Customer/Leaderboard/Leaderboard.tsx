import { useState } from 'react';
import Prizes from './components/prize/Prizes';
import './styles/leaderboard.css';
import LeaderboardHeader from './components/leaderboardHeader/LeaderboardHeader';
import LeaderboardUsers from './components/leaderboardUsers/LeaderboardUsers';

export enum HEADER_STATE {
  TODAY = 'FASTEST OF TODAY',
  LEADERBOARD = 'LEADERBOARD',
}

const TABS = [HEADER_STATE.TODAY, HEADER_STATE.LEADERBOARD];
const Leaderboard = () => {
  const [headerTab, setHeaderTab] = useState<number>(0);
  const updateTab = (index: number) => {
    setHeaderTab(index);
  };
  return (
    <div className="customer-leader-board-container">
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
