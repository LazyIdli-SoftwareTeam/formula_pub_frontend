import React from 'react';
import { HEADER_STATE } from '../../Leaderboard';
// import { IoIosArrowBack } from 'react-icons/io';
import './styles.css';
// import { IoIosArrowForward } from 'react-icons/io';

const LeaderboardHeader: React.FC<{
  activeTabIndex: number;
  tabs: HEADER_STATE[];
  // updateTab: (value: number) => void;
}> = ({ activeTabIndex, tabs }) => {
  const leaderboardStyle = {
    background:
      'radial-gradient(56.74% 76.71% at 48.59% 19.18%, rgba(248, 153, 11, 0.9) 0%, rgba(248, 153, 11, 0.6) 100%)',
  };
  // const moveForward = () => {
  //   if (activeTabIndex === tabs.length - 1) {
  //     updateTab(0);
  //   } else {
  //     updateTab(activeTabIndex + 1);
  //   }
  // };

  // const moveBackward = () => {
  //   if (activeTabIndex === 0) {
  //     updateTab(tabs.length - 1);
  //   } else {
  //     updateTab(activeTabIndex - 1);
  //   }
  // };
  return (
    <div
      style={
        tabs[activeTabIndex] === HEADER_STATE.LEADERBOARD
          ? leaderboardStyle
          : {}
      }
      className="customer-leader-board-header"
    >
      {/* <span onClick={moveBackward} className="--arrow">
        <IoIosArrowBack />
      </span> */}
      <span className="--txt">{tabs[activeTabIndex]}</span>
      {/* <span onClick={moveForward} className="--arrow">
        <IoIosArrowForward />
      </span> */}
    </div>
  );
};

export default LeaderboardHeader;
