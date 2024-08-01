/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import './styles.css';
import LeaderboardRow from '../LeaderboardRow/LeaderboardRow';
import LeaderboardIndividualCards from '../LeaderboardIndividualCard/LeadeboardIndividualCards';

type t_props = { index: number; score: any }[];

const HighLightPlayer: React.FC<{ props: t_props; type: string }> = ({
  props,
  type,
}) => {
  const [shouldStart, setShouldStart] = useState(false);
  const [data, setData] = useState<t_props>([]);
  const GetComponent = () => {
    if (type === 'non-tournament') {
      return data.map((bar, i) => (
        <div key={i} className="red-bar-container">
          <LeaderboardIndividualCards
            name={bar.score.code.userName}
            key={i}
            height="calc(100dvh / 21)"
            score={bar.score.score}
            index={bar.index}
          />
        </div>
      ));
    } else {
      return data.map((bar, i) => (
        <div key={i} className="red-bar-container">
          <LeaderboardRow
            index={bar.index}
            score={bar.score}
            style={{}}
            height="calc(100dvh / 21)"
            key={i}
          />
        </div>
      ));
    }
  };
  useEffect(() => {
    const arr = [];
    for (const pr of props) {
      if (pr.index > 19) arr.push(pr);
    }
    if (arr.length != 0) {
      setShouldStart(true);
      setData(arr);
    }
  }, []);
  if (!shouldStart) return;
  return (
    <div className="high-light-user-overlay-container">
      <div className="high-light-user-container">
        <GetComponent />
      </div>
    </div>
  );
};

export default HighLightPlayer;
