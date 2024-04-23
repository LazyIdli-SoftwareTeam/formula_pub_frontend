import {
  RidesCircles,
  WaitingQueue,
} from '../BuyPass/components/userQueue/UserQueue';
import './styles/bookings.css';
import { MdArrowDropDown } from 'react-icons/md';

const OrderCard = () => {
  return (
    <div className="customer-order-card-information-container">
      <div className="customer-order-card-information">
        <div className="customer-order-card-start">
          <span className="--ride">4 Rides</span>
          <span className="--booking">Booking ID: 12312</span>
          <span className="--time">Thursday 9:03pm | 08/03/2024</span>
        </div>
        <div className="customer-order-card-end">
          <span className="--details">Order details</span>
          <span className="--passes">
            <MdArrowDropDown  className='--icon' /> View Race Passes
          </span>
        </div>
      </div>
      <div className="customer-card-queue">
        <div className="customer-card-top">
          <span className="--head">Your turn (s)</span>
          <div className="--circles">
            {new Array(3).fill(0).map((_i, i) => (
              <RidesCircles q={i} turn={false} />
            ))}
          </div>
        </div>
        <WaitingQueue btn={false} />
      </div>
    </div>
  );
};

const Bookings = () => {
  return (
    <div className="customer-booking-container">
      <div className="customer-booking-top-container">
        <span className="--btn --hidden">History</span>
        <span>All Race Passes</span>
        <span className="--btn">History</span>
      </div>
      <div className="customer-race-passes-container">
        {new Array(4).fill(0).map((order, i) => (
          <div>
            <OrderCard />
            {i == 3 ? null : <div className="--line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
