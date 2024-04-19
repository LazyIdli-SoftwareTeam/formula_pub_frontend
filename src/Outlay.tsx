import React, { useState } from 'react';
import Header from './components/header/Header';
import RaceQueue from './views/Customer/RaceQueue/RaceQueue';
import Leaderboard from './views/Customer/Leaderboard/Leaderboard';

export enum Tab {
  LEADERBOARD = 'LEADERBOARD',
  QUEUE = 'QUEUE',
  BUY = 'BUY',
  RETRIVE = 'RETRIVE',
}

const Outlay: React.FC<{ children: JSX.Element; backBtn?: boolean }> = ({
  children,
  backBtn = true,
}) => {
  const [currentTab, setCurrentTab] = useState(Tab.BUY);
  const changeTabValue = (value: Tab) => {
    setCurrentTab(value);
  };
  const GetHeader = () => {
    if (backBtn) {
      return (
        <Header
          changeTabValue={changeTabValue}
          currentTab={currentTab}
          backBtnHandler={() => window.history.back()}
        />
      );
    } else {
      return <Header changeTabValue={changeTabValue} currentTab={currentTab} />;
    }
  };

  const GetComponent = () => {
    if (currentTab === Tab.LEADERBOARD) {
      return <Leaderboard />;
    } else if (currentTab === Tab.QUEUE) {
      return <RaceQueue />;
    } else if (currentTab === Tab.BUY) {
      return children;
    } else {
      return children;
    }
  };
  return (
    <div className="global-outlay-container">
      <div className="global-top-nav-bar">
        <GetHeader />
      </div>
      <div className="global-bottom-content">
        <GetComponent />
      </div>
    </div>
  );
};

export default Outlay;
