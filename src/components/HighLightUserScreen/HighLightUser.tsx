/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import './styles.css';

const HighLightUserScreen: React.FC<{
  score: string;
  rank: number;
  setHighLightUser: any;
  name: string;
}> = ({ name, rank, score, setHighLightUser }) => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    const id = setTimeout(() => {
      if (timer <= 0) {
        setHighLightUser(null);
        return () => {
          clearTimeout(id);
        };
      }
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);
  return (
    <div className="high-light-user-screen-container">
      <div className="high-light-user-screen-content">
        <div className="--top">
          <span>#{rank}</span>
          <span>{name}</span>
        </div>
        <div className="--score">
          <span>{score}</span>
        </div>
        <div className="--timer">
          <span>00:{timer >= 10 ? timer : '0' + timer}</span>
        </div>
      </div>
    </div>
  );
};

export default HighLightUserScreen;
