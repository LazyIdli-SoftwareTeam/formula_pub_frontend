/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import LeaderboardHead from '../../../components/LeaderboardHead/LeaderboardHead';
import LeaderboardHeading from '../../../components/LeaderboardHeading/LeaderboardHeading';
import LeaderboardRow from '../../../components/LeaderboardRow/LeaderboardRow';
import './styles.css';
import { PAGE_STATE } from '../../LeaderboardKiosk/components/HeaderKiosk/LeaderboardKioskHeader';
import { HttpStatusCode } from 'axios';
import { getTournamentScores } from '../../../api/tournament';
import CustomLoader from '../../../components/loader/CustomLoader';
import { SOCKET_ENDPOINT } from '../../../constants/url_config';
import { io } from 'socket.io-client';
const color = '#';
// const BORDER= '1px solid #009db5'

const LeaderboardList = () => {
  const [scores, setScores] = useState<any>([]);
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);

  useEffect(() => {
    console.log(scores);
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('addScoreTournament', (data: any) => {
      console.log(data);
      if (!data.data) return;
      const s = [...data.data];
      const nW = [];

      for (let i = 0; i < s.length; i++) {
        if (i === data.index) {
          nW.push({ ...s[i], entered: true });
        } else {
          nW.push({ ...s[i], entered: false });
        }
      }
      setScores([...nW]);
    });
    return () => {
      socket.off('addScoreTournament');
      socket.disconnect();
    };
  }, [scores]);
  const getScores = () => {
    setPageState(PAGE_STATE.LOADING);
    const onAccept = (response: any) => {
      if (response.status === HttpStatusCode.Accepted) {
        setPageState(PAGE_STATE.ACCEPTED);
        setScores(response.data.data);
        console.log(response);
      } else {
        setPageState(PAGE_STATE.REJECTED);
      }
    };
    const onReject = () => {
      setPageState(PAGE_STATE.REJECTED);
    };
    getTournamentScores(onAccept, onReject);
  };
  useEffect(() => {
    getScores();
  }, []);
  if (pageState === PAGE_STATE.LOADING) return <CustomLoader />;
  if (pageState === PAGE_STATE.REJECTED)
    return <span>Some error occurred try again later</span>;
  return (
    <div className="leader-board-list-container">
      <div className="leader-board-top-heading">
        <LeaderboardHeading heading="Tournament Leaderboard" />
      </div>
      <div className="leader-board-list-scores-container">
        <LeaderboardHead />
        <div className="--scores">
          {scores.map((score: any, i: number) => (
            <LeaderboardRow
              key={i}
              score={score}
              index={i}
              entered={score.entered}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LeaderboardList;
