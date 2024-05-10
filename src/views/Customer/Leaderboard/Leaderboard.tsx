/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Prizes from './components/prize/Prizes';
import './styles/leaderboard.css';
import LeaderboardHeader from './components/leaderboardHeader/LeaderboardHeader';
import LeaderboardUsers from './components/leaderboardUsers/LeaderboardUsers';
import ScoreVerification from '../../../components/ScoreVerification/ScoreVerification';
import { PAGE_STATE } from '../BuyPass/Home';
import { getScores } from '../../../api/lb';
import { AxiosResponse } from 'axios';
import { FullScreenLoader } from '../../../components/loader/CustomLoader';
import { t_userInfo } from '../../../types/userInfo';
import { SOCKET_ENDPOINT } from '../../../constants/url_config';
import { io } from 'socket.io-client';

export enum HEADER_STATE {
  TODAY = 'FASTEST OF TODAY',
  LEADERBOARD = 'LEADERBOARD',
}

const TABS = [HEADER_STATE.TODAY, HEADER_STATE.LEADERBOARD];
const Leaderboard = () => {
  const [headerTab, setHeaderTab] = useState<number>(0);
  const [scoreVerifyPopup, setScoreVerifyPopup] = useState(false);
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const [scores, setScores] = useState<{ player: t_userInfo; score: string }[]>(
    []
  );
  useEffect(() => {
    console.log('score', scores);
  }, [scores]);

  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('score', (data) => {
      console.log(data);
      const newScores = data.map((score: any) => {
        return { player: score.code, score: score.score };
      });
      setScores(newScores);
    });
    return () => {
      socket.off('score');
      socket.disconnect();
    };
  }, [scores]);

  useEffect(() => {
    const onAcceptGetScores = (response: AxiosResponse) => {
      if (response.status === 202) {
        setPageState(PAGE_STATE.ACCEPTED);
        const newScores = response.data.data.map((score: any) => {
          return { player: score.code, score: score.score };
        });
        setScores(newScores);
      } else {
        setPageState(PAGE_STATE.REJECTED);
      }
    };
    const onRejectGetScores = (error: any) => {
      console.log(error);
      setPageState(PAGE_STATE.REJECTED);
    };
    getScores(onAcceptGetScores, onRejectGetScores, {
      scoreFilter: headerTab === 0 ? 'today' : '',
    });
  }, [headerTab]);

  const updateTab = (index: number) => {
    setHeaderTab(index);
  };
  // const showVerifyPopup = () => {
  //   setScoreVerifyPopup(true);
  // };
  const closeVerifyPopup = () => {
    setScoreVerifyPopup(false);
  };
  if (pageState === PAGE_STATE.LOADING) return <FullScreenLoader />;
  if (pageState === PAGE_STATE.REJECTED)
    return <span>Some error occurred try again later</span>;
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
          // showScoreVerifyPopup={showVerifyPopup}
          scores={scores}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
