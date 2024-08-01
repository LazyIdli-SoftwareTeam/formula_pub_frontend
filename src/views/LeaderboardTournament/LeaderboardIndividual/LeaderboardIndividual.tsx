/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { LeaderboardIndividualHeader } from '../../../components/LeaderboardHead/LeaderboardHead';
import LeaderboardHeading from '../../../components/LeaderboardHeading/LeaderboardHeading';
import './styles.css';
import { PAGE_STATE } from '../../LeaderboardKiosk/components/HeaderKiosk/LeaderboardKioskHeader';
import { HttpStatusCode } from 'axios';
import CustomLoader from '../../../components/loader/CustomLoader';
import { getScores } from '../../../api/scores';
import LeaderboardIndividualCards from '../../../components/LeaderboardIndividualCard/LeadeboardIndividualCards';
import { SOCKET_ENDPOINT } from '../../../constants/url_config';
// const BORDER= '1px solid #009db5'
import { io } from 'socket.io-client';
import HighLightPlayer from '../../../components/highlightPlayer/HighLightPlayer';

const LeaderboardIndividual: React.FC<{
  mapType: { name: string; value: string };
}> = ({ mapType }) => {
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
    }, 20000);
    return () => {
      clearTimeout(id);
    };
  }, [highlightPlayer]);
  const getScoresMap = () => {
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
    getScores(onAccept, onReject, { mapType: mapType.value });
  };
  useEffect(() => {
    getScoresMap();
  }, [])
  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('highlightUserRegister', (data: any) => {
      if (!data.data) return;
      const indexes = [];
      console.log(scores); 
      console.log(data);
      for (const el of data.data) {
        console.log('el', el)
        const index = scores.findIndex(
          (score: any) => score.code._id.toString() === el._id.toString()
        );
        indexes.push(index);
      }
      console.log(indexes);

      const obj: any = {
        state: 'firstScreen',
        scores: [],
      };
      for (const index of indexes) {
        if (index < 0) continue;
        obj.scores.push({ index: index, score: scores[index] });
      }
      console.log('obj', obj)
      setHighLightPlayer({ ...obj });
    });
    return () => {
      socket.off('highlightUserRegister');
      socket.disconnect();
    };
  }, [highlightPlayer, scores]);

  if (pageState === PAGE_STATE.LOADING) return <CustomLoader />;
  if (pageState === PAGE_STATE.REJECTED)
    return <span>Some error occurred try again later</span>;
  return (
    <div className="leader-board-list-container">
      {highlightPlayer.state === 'firstScreen' ? (
        <HighLightPlayer props={highlightPlayer.scores} type="non-tournament" />
      ) : null}
      <div className="leader-board-top-heading">
        <LeaderboardHeading
          heading={mapType.name}
          width={mapType.value === 'track2' ? '5%' : '10%'}
        />
      </div>
      <div className="leader-board-list-scores-container">
        <LeaderboardIndividualHeader />
        {scores.map((score: any, i: number) => (
          <div
            style={{
              height: 'calc((100dvh - 140px - 200px) / 21)',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <LeaderboardIndividualCards
              name={score.code.userName}
              key={i}
              highlightAnimation={
                highlightPlayer.state === 'firstScreen'
                  ? highlightPlayer.scores.map((s: any) => s.index)
                  : []
              }
              score={score.score}
              index={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default LeaderboardIndividual;
