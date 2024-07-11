/* eslint-disable @typescript-eslint/no-explicit-any */
import FinalLogo from '../../../../assets/images/FinalLogo.png';
import TehoIcon from '../../../../assets/icons/Teho-icon';

import './LeaderboardKioskHeader.css';
import { LeaderboardKioskRaceQueue } from '../LeaderboardKioskRaceQueue/LeaderboardkioskRaceQueue';
import { LeaderboardKioskFastestHeader } from '../LeaderBoardFatestScore/newanimation';
import React, { useEffect, useState } from 'react';
// import { AxiosResponse } from 'axios';
// import { getScores } from '../../../../api/scores';
// import { FullScreenLoader } from '../../../../components/loader/CustomLoader';
export enum PAGE_STATE {
  REJECTED,
  ACCEPTED,
  UNKNOWN,
  LOADING,
}
export const LeaderboardkioskMainpage: React.FC<{ heading?: string }> = ({
  heading = 'LEADERBOARD',
}) => {
  // const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const onAcceptGetScores = (response: AxiosResponse) => {
    //   if (response.status === 202) {
    //     setPageState(PAGE_STATE.ACCEPTED);
    //     const newScores = response.data.data.map((score: any) => {
    //       return { ...score.code, score: score.score };
    //     });
    //     setUsers(newScores);
    //   } else {
    //     setPageState(PAGE_STATE.REJECTED);
    //   }
    // };
    // const onRejectGetScores = (error: any) => {
    //   console.log(error);
    //   setPageState(PAGE_STATE.REJECTED);
    // };
    // setPageState(PAGE_STATE.LOADING);
    // getScores(onAcceptGetScores, onRejectGetScores, {
      
    // });
  }, [heading]);
  useEffect(() => {
    console.log(users);
  }, [users])
  // if (pageState === PAGE_STATE.LOADING) return <FullScreenLoader />;
  return (
    <div className="leader-board-kiosk-global-container">
      <div className="leader-board-kiosk-header">
        <img src={FinalLogo} className="bar-image" />
        <TehoIcon className="gilli" width={120} height={200} />
      </div>
      <div className='image-backe'>
      <div className="main-fast-today-kiosk">
        <RightSide />
        <span className="leader-board-kiosk-fastest-main-text">{heading}</span>
        <LeftSide />
      </div>
      <LeaderboardKioskFastestHeader users={users} setUsers={setUsers} heading={heading} />
      </div>
    </div>
  );
};

export const RightSide = () => {
  return (
    <div className="right-side">
      <hr className="horizontal-right" />
      <hr className="horizontal-right-1" />
      <hr className="horizontal-right-2" />
    </div>
  );
};

export const LeftSide = () => {
  return (
    <div className="left-side">
      <hr className="horizontal-left" />
      <hr className="horizontal-left-1" />
      <hr className="horizontal-left-2" />
    </div>
  );
};

export const LeaderboardKioskHeader = () => {
  return (
    <>
      <div className="leader-board-kiosk-header">
        <img src={FinalLogo} className="bar-image" />
        <TehoIcon className="gilli" width={95} height={35} />
      </div>
      <LeaderboardKioskRaceQueue />
    </>
  );
};
