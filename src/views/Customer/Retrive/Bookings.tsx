import React, { useEffect, useState } from 'react';
import {
  RidesCircles,
  WaitingQueue,
} from '../BuyPass/components/userQueue/UserQueue';
import './styles/bookings.css';
import { TiArrowSortedDown } from 'react-icons/ti';

import { TiArrowSortedUp } from 'react-icons/ti';

import OrderDetails from '../../../components/orderDetails/OrderDetails';
import { t_order } from '../../../types/order';
import { Accordion, AccordionDetails } from '@mui/material';
// import { GeneratePlayerCard } from '../BuyPass/GenerateRacePass';
import History from './History';
import { enqueueSnackbar } from 'notistack';
export const order: t_order = {
  cart: {
    combos: [
      {
        combo: {
          comboDescription: 'some thing here',
          comboName: 'Super mahar raja',
          id: '1231',
          numberOfRides: 2,
          prize: 1324,
          otherItems: '',
        },
        iteration: 0,
      },
    ],
  },
  host: {
    name: 'some name',
    phoneNumber: '3423423424',
    type: 'host',
    // raceCode: '1231',
  },
  orderDescription: 'wkeq',
  rides: 2,
  totalAmount: 12313,
  users: [
    { name: '123', phoneNumber: '2132313', type: 'user',  },
  ],
};

export const BookingStart = () => {
  return (
    <div className="customer-order-card-start">
      <span className="--ride">4 Rides</span>
      <span className="--booking">Booking ID: 12312</span>
      <span className="--time">Thursday 9:03pm | 08/03/2024</span>
    </div>
  );
};
const OrderCard: React.FC<{ setOrderDetails: (order: t_order) => void }> = ({
  setOrderDetails,
}) => {
  const [accordianOpened, setAccordianOpened] = useState(false);
  return (
    <div className="customer-order-card-information-container">
      <div className="customer-order-card-information">
        <BookingStart />
        <div className="customer-order-card-end">
          <span onClick={() => setOrderDetails(order)} className="--details">
            Order details
          </span>
          <span
            onClick={() => setAccordianOpened(!accordianOpened)}
            className="--passes"
          >
            {accordianOpened ? (
              <TiArrowSortedUp />
            ) : (
              <TiArrowSortedDown className="--icon" />
            )}{' '}
            {accordianOpened ? 'Back' : 'View Race Passes'}
          </span>
        </div>
      </div>
      {accordianOpened ? (
        <Accordion>
          <AccordionDetails>
            {/* <GeneratePlayerCard index={1} /> */}
            {order.users.map(() => (
              <></>
              // <GeneratePlayerCard index={i + 2} />
            ))}
          </AccordionDetails>
        </Accordion>
      ) : null}
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
  const [showOrderDetails, setShowOrderDetails] = useState<t_order | null>(
    null
  );
  const [showHistory, setShowHistory] = useState(false);
  const setOrderDetails = (order: t_order) => {
    setShowOrderDetails(order);
  };
  useEffect(() => {
    enqueueSnackbar('Booking(s) Successfully Retrieved!', {
      variant: 'info',
      autoHideDuration: 4000,
    });
  }, []);
  if (showHistory) return <History />;

  return (
    <div className="customer-booking-container">
      {showOrderDetails ? (
        <OrderDetails
          order={showOrderDetails}
          closePopup={() => setShowOrderDetails(null)}
        />
      ) : null}
      <div className="customer-booking-top-container">
        <span className="--btn --hidden">History</span>
        <span>All Race Passes</span>
        <span onClick={() => setShowHistory(true)} className="--btn">
          History
        </span>
      </div>
      <div className="customer-race-passes-container">
        {new Array(4).fill(0).map((_, i) => (
          <div>
            <OrderCard setOrderDetails={setOrderDetails} />
            {i == 3 ? null : <div className="--line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
