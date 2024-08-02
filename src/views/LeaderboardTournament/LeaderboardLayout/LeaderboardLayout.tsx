/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import LeaderboardIndividual from '../LeaderboardIndividual/LeaderboardIndividual';
// import LeaderboardList from '../LeaderboardList/LeaderboardList';
import './styles.css';
import LeaderboardList from '../LeaderboardList/LeaderboardList';
import LeaderboardPosters from '../../../components/LeaderboardPosters/LeaderboardPoster';
import Nav from '../../../components/Nav/Nav';
import HighLightUserScreen from '../../../components/HighLightUserScreen/HighLightUser';

const tracks = [
  {
    name: 'British GP',
    value: 'track1',
  },
  {
    name: 'Dutch GP',
    value: 'track2',
  },
  {
    name: 'Belgium GP',
    value: 'track3',
  },
];
const ThreeTrackLb = () => {
  return (
    <div className="non-tournament-leader-board">
      <div className="--non-lb-container">
        <LeaderboardIndividual mapType={tracks[0]} />
      </div>
      <div className="--non-lb-container">
        <LeaderboardIndividual mapType={tracks[1]} />
      </div>
      <div className="--non-lb-container">
        <LeaderboardIndividual mapType={tracks[2]} />
      </div>
    </div>
  );
};

const LeaderboardLayout: React.FC<{
  hightLightUser: any;
  setHighLightUser: any;
}> = ({ hightLightUser, setHighLightUser }) => {
  const [mainPage, setMainPage] = useState(true);

  const [index, setIndex] = useState(0);
  console.log(hightLightUser && hightLightUser.name && hightLightUser.rank);
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 81) {
        setMainPage(!mainPage);
      }
    });
  }, [mainPage]);
  // useEffect(() => {
  //   let id: any;
  //   if (mainPage) {
  //     id = setTimeout(() => {
  //       setMainPage(false);
  //       setIndex(0);
  //     }, 40000);
  //   } else {
  //     id = setTimeout(() => {
  //       setIndex(index + 1);
  //       if (index >= 2) {
  //         setMainPage(true);
  //         setIndex(0);
  //       }
  //     }, 30000);
  //   }
  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, [mainPage, index]);
  if (hightLightUser && hightLightUser.name && hightLightUser.rank) {
    return (
      <HighLightUserScreen
        name={hightLightUser.name}
        rank={hightLightUser.rank}
        setHighLightUser={setHighLightUser}
        score={hightLightUser.score}
      />
    );
  }

  if (index > 0) {
    return <LeaderboardPosters index={index} />;
  }

  return (
    <div className="leader-board-layout-container">
      <div className="leader-board-top-container">
        <Nav />
      </div>

      {!mainPage ? <ThreeTrackLb /> : <LeaderboardList />}
    </div>
  );
};

export default LeaderboardLayout;
