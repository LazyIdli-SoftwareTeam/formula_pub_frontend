/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import './styles.css';
import Button from '../../../../components/hexaButton/Button';
const ArrowLeft: React.FC<{ active: boolean; style: any }> = ({
  style,
  active,
}) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      style={
        active
          ? { ...style, filter: 'drop-shadow(0px 0px 3px #4FBEDBE5)' }
          : style
      }
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0H8.61538L-9.53674e-07 6L8.61538 12H14L5.38461 6L14 0Z"
        fill="#1CB1D9"
      />
    </svg>
  );
};

const ArrowRight: React.FC<{ active: boolean; style: any }> = ({
  style,
  active,
}) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      style={
        active
          ? { ...style, filter: 'drop-shadow(0px 0px 3px #4FBEDBE5)' }
          : style
      }
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H5.38462L14 6L5.38462 12H0L8.61539 6L0 0Z" fill="#1CB1D9" />
    </svg>
  );
};

const BookingInformation: React.FC<{
  rides: number;
  minIndex: number;
  turn: boolean;
}> = ({ rides, turn, minIndex }) => {
  const [queue, setQueue] = useState<number[]>([]);
  const tempQueue: number[] = [];
  useEffect(() => {
    for (let i = minIndex; i < rides; i++) {
      tempQueue.push(i + 1);
    }
    setQueue(tempQueue);
  }, []);

  return (
    <div
      style={turn ? { boxShadow: '0px 0px 8px 2px #4FBEDBE5' } : {}}
      className="user-booking-information-container"
    >
      <div className="user-booking-top-section">
        <div className="user-booking-top-section-start">
          <span className="--text">{rides} Rides</span>
        </div>
        <div className="user-booking-top-section-end">
          <span className="--booking">Booking ID : 654321 </span>
          <span className="--booking-info">Thursday 9:03pm | 08/03/2024</span>
        </div>
      </div>
      <div className="user-booking-queue-turns">
        {queue.map((q, i) => {
          return (
            <div
              key={i}
              style={turn ? { boxShadow: '0px 0px 8px 2px #4FBEDBE5' } : {}}
              className="user-booking-queue-circle"
            >
              {q}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WaitingQueue = () => {
  return (
    <div className="waiting-queue-bottom-container">
      <div className="waiting-queue-container">
        <div className="waiting-queue-lines">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="waiting-heading">
          <span>WAIT</span>
        </div>
        <div className="waiting-queue-lines">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="waiting-queue-bottom-btn">
        <span className="--text">For further information:</span>
        <Button
          content="Check Race Queue"
          disabled={false}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

const ArrowsPointingRight = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const transforms = [20, 40, 60, 80];
  useEffect(() => {
    const id = setInterval(() => {
      if (activeIndex === 3) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 300);
    return () => clearTimeout(id);
  }, [activeIndex]);
  return (
    <div className="global-arrows-pointing-right arrows">
      {new Array(4).fill(0).map((_, i) => {
        return (
          <ArrowRight
            active={i == activeIndex}
            style={{
              height: 12 + transforms[i] + 'px',
              width: 14 + transforms[i] + 'px',
            }}
          />
        );
      })}
    </div>
  );
};

const ArrowsPointingLeft = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const transforms = [80, 60, 40, 20];
  useEffect(() => {
    const id = setTimeout(() => {
      if (activeIndex === 0) {
        setActiveIndex(3);
      } else {
        setActiveIndex(activeIndex - 1);
      }
      return () => clearTimeout(id);
    }, 300);
  }, [activeIndex]);
  return (
    <div className="global-arrows-pointing-right arrows">
      {new Array(4).fill(0).map((_, i) => {
        return (
          <ArrowLeft
            active={i == activeIndex}
            style={{
              height: 12 + transforms[i] + 'px',
              width: 14 + transforms[i] + 'px',
            }}
          />
        );
      })}
    </div>
  );
};

const ActiveRaceQueue = () => {
  return (
    <div className="active-race-queue-container">
      <ArrowsPointingRight />
      <div className="active-heading">
        <span className="--go">GO</span>
        <span className="--race">RACE</span>
      </div>
      <ArrowsPointingLeft />
    </div>
  );
};

export const Lines: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div className="global-lines">
      {new Array(index).fill(0).map((_, i) => (
        <div key={i} className="--global-line"></div>
      ))}
    </div>
  );
};

const UsertempQueue: React.FC<{
  turn: boolean;
  rides: number;
  minIndex: number;
}> = ({ rides, minIndex, turn }) => {
  return (
    <div className="user-booking-queue-container">
      <div className="user-booking-queue-container-top">
        <span>Your turns: </span>
      </div>
      <BookingInformation turn={turn} minIndex={minIndex} rides={rides} />
      {!turn ? <WaitingQueue /> : <ActiveRaceQueue />}
    </div>
  );
};

export default UsertempQueue;
