/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './prizes-popup.css';
import './styles.css';
import { RxCross1 } from 'react-icons/rx';
import { addRsSymbol } from '../../../../../utils/addRsSymbol';
import './prizes-popup.css';

const Prizes = () => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    console.log(click);
  }, [click])
  const PrizePopup = () => {
    return (
      <div className="prizes-popup-overlay-container">
        <div className="prize-popup-container">
          <div className="prize-popup-container-top-heading">
            <span className="--cross --hidden">
              <RxCross1 />
            </span>

            <span className="--head">Prizes to win</span>
            <span onClick={() => setClick(false)} className="--cross">
              <RxCross1 />
            </span>
          </div>
          <div className="prizes-for-today">
            <span>Winner of the week : {addRsSymbol('1500')}</span>
            <span>2nd fastest of the week : {addRsSymbol('1000')}</span>
            <span>3rd fastest of the week : {addRsSymbol('750')}</span>
          </div>
          <div className="prizes-bottom">
            <span>Exciting daily prizes worth : {addRsSymbol('250')}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div onClick={() => setClick(true)} className="customer-prize-container">
      {click ? <PrizePopup  /> : null}
      <img src="/leaderboard/win.svg" />
      <span className="--txt">Prizes To Win</span>
    </div>
  );
};

export default Prizes;
