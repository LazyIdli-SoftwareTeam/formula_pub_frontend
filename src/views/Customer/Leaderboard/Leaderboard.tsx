import { useState } from 'react';
import Prizes from './components/prize/Prizes';
import './styles/leaderboard.css';
import LeaderboardHeader from './components/leaderboardHeader/LeaderboardHeader';
import LeaderboardUsers from './components/leaderboardUsers/LeaderboardUsers';
import LeaderboardPersonal, { Popup } from './components/leaderboardPersonal/LeaderboardPersonal';

export enum HEADER_STATE {
  TODAY = 'FASTEST OF TODAY',
  LEADERBOARD = 'LEADERBOARD',
}

const TABS = [HEADER_STATE.TODAY, HEADER_STATE.LEADERBOARD];
const Leaderboard = () => {
  const [personalPopup, setPersonalPopup]= useState(false)
  const [headerTab, setHeaderTab] = useState<number>(0);
  const updateTab = (index: number) => {
    setHeaderTab(index);
  };
  return (
    <>
    {personalPopup ? <Popup closePopup={()=> setPersonalPopup(false)}/>: null}
    <div className='total-container'>
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
   
   
   </div>
   <div className="personal-best-container">
   <LeaderboardPersonal openPopup={() => setPersonalPopup(true)}/>
   </div>
  </>
 
  );
};

export default Leaderboard;
