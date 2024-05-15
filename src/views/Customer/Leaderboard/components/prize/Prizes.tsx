/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './prizes-popup.css';
import './styles.css';
import { RxCross1 } from 'react-icons/rx';
import './prizes-popup.css';

const Prizes: React.FC<{ click: boolean; setClick: any }> = ({
  click,
  setClick,
}) => {
  const PrizePopup = () => {
    return (
      <div className="prizes-popup-overlay-container">
        <div className="prize-popup-container">
          <div className="prize-popup-container-top-heading">
            <span className="--head">Win exciting F1 collectables</span>
            <span
              onClickCapture={() => {
                setClick(false);
              }}
              className="--cross"
            >
              <RxCross1 />
            </span>
          </div>
          <div className="prizes-for-today">
            <span>Top 3 of the week</span>
            <span>&</span>
            <span>Fastest of the day</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div onClick={() => setClick(true)} className="customer-prize-container">
      {click ? <PrizePopup /> : null}
      <img src="/leaderboard/win.svg" />
      <span className="--txt">Prizes To Win</span>
    </div>
  );
};

export default Prizes;
