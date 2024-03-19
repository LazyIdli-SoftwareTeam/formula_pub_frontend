import React, { useEffect, useState } from 'react';
import './styles.css';
const BookingInformation: React.FC<{ rides: number; minIndex: number }> = ({
  rides,
  minIndex,
}) => {
  const [queue, setQueue] = useState<number[]>([]);
  const tempQueue: number[] = [];
  useEffect(() => {
    for (let i = minIndex; i < rides; i++) {
      tempQueue.push(i + 1);
    }
    setQueue(tempQueue);
  }, []);

  return (
    <div className="user-booking-information-container">
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
            <div key={i} className="user-booking-queue-circle">
              {q}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Lines: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div className="global-lines">
      {new Array(index).fill(0).map((_, i) => (
        <div key={i} className="--global-line">
        </div>
      ))}
    </div>
  );
};

// const GetActiveText = () => {
//   return <div className="user-booking-information-button">
//     <Lines index={3} />
//     <span className='--text'>WAIT</span>
//     <Lines index={3} />
//   </div>;
// };

const UsertempQueue: React.FC<{
  turn: boolean;
  rides: number;
  minIndex: number;
}> = ({ rides, minIndex }) => {
  return (
    <div className="user-booking-queue-container">
      <div className="user-booking-queue-container-top">
        <span>Your turns: </span>
      </div>
      <BookingInformation minIndex={minIndex} rides={rides} />
    </div>
  );
};

export default UsertempQueue;
