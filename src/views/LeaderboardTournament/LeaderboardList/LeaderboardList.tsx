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
import HighLightPlayer from '../../../components/highlightPlayer/HighLightPlayer';
import LeaderboardFooter from '../../../components/LeaderboardFooter/LeaderboardFooter';
const color = '#';
// const BORDER= '1px solid #009db5'

const LeaderboardList = () => {
  const [scores, setScores] = useState<any>([]);
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const [highlightPlayer, setHighLightPlayer] = useState<{
    state: 'hide' | 'firstScreen' | 'overlay';
    scores: any;
  }>({
    state: 'hide',
    scores: [],
  });

  useEffect(() => {
    if (highlightPlayer.state === 'hide') return;
    const id = setTimeout(() => {
      setHighLightPlayer({
        scores: [],
        state: 'hide',
      });
    }, 15000);
    return () => {
      clearTimeout(id);
    };
  }, [highlightPlayer]);

  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('highlightUserTournament', (data: any) => {
      if (!data.data) return;
      const indexes = [];
      for (const el of data.data) {
        const index = scores.findIndex((score: any) => score._id === el._id);
        indexes.push(index);
      }

      if (indexes[0] < 0) return;
      const obj: any = {
        state: 'firstScreen',
        scores: [],
      };
      for (const index of indexes) {
        obj.scores.push({ index: index, score: scores[index] });
      }


      setHighLightPlayer({ ...obj });
    });
    socket.on('addScoreTournament', (data: any) => {
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
      socket.off('highlightUserTournament');
      socket.disconnect();
    };
  }, [scores]);
  const getScores = () => {
    setPageState(PAGE_STATE.LOADING);
    const onAccept = (response: any) => {
      if (response.status === HttpStatusCode.Accepted) {
        setPageState(PAGE_STATE.ACCEPTED);
        setScores(response.data.data);
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
  if (pageState === PAGE_STATE.LOADING)
    return (
      <div className="global-loader">
        <CustomLoader />
      </div>
    );
  if (pageState === PAGE_STATE.REJECTED)
    return <span>Some error occurred try again later</span>;
  return (
    <>
      <div className="leader-board-list-container">
        {highlightPlayer.state === 'firstScreen' ? (
          <HighLightPlayer type="tournament" props={highlightPlayer.scores} />
        ) : null}
        <div className="leader-board-top-heading">
          <LeaderboardHeading heading="Tournament Leaderboard" />
        </div>
        <div className="leader-board-list-scores-container">
          <LeaderboardHead />
          {scores.map((score: any, i: number) => (
            <div
              style={{
                height: 'calc((100dvh - 140px - 200px) / 21)',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}
            >
              <LeaderboardRow
                key={i}
                score={score}
                index={i}
                highlightAnimation={
                  highlightPlayer.state === 'firstScreen'
                    ? highlightPlayer.scores.map((s: any) => s.index)
                    : []
                }
                entered={score.entered}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>
      {highlightPlayer.state == 'hide' ? (
        <div className="leader-board-footer-container">
          <LeaderboardFooter />
        </div>
      ) : null}
    </>
  );
};
export default LeaderboardList;
