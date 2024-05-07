import React, { useEffect, useState } from 'react';
import './styles/bookings.css';
import { TiArrowSortedDown } from 'react-icons/ti';

import { TiArrowSortedUp } from 'react-icons/ti';

import OrderDetails from '../../../components/orderDetails/OrderDetails';
import { t_order } from '../../../types/order';
import { Accordion, AccordionDetails } from '@mui/material';
// import { GeneratePlayerCard } from '../BuyPass/GenerateRacePass';
// import History from './History';
import { enqueueSnackbar } from 'notistack';
import { GeneratePlayerCard } from '../BuyPass/GenerateRacePass';
import Button from '../../../components/hexaButton/Button';
import { getQueryParams } from '../../../api/query';

export const BookingStart: React.FC<{ order: t_order }> = ({ order }) => {
  return (
    <div className="customer-order-card-start">
      <span className="--ride">{order.rides} Rides</span>
      <span className="--booking">Booking ID: {order._id}</span>
      <span className="--time">Thursday 9:03pm | 08/03/2024</span>
    </div>
  );
};
const OrderCard: React.FC<{
  setOrderDetails: (order: t_order) => void;
  order: t_order;
}> = ({ setOrderDetails, order }) => {
  const [accordianOpened, setAccordianOpened] = useState(false);
  return (
    <div className="customer-order-card-information-container">
      <div className="customer-order-card-information">
        <BookingStart order={order} />
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
            {order.users.map((user, i) => (
              <GeneratePlayerCard index={i} user={user} />
            ))}
          </AccordionDetails>
        </Accordion>
      ) : null}
      {/* <div className="customer-card-queue">
        <div className="customer-card-top">
          <span className="--head">Your turn (s)</span>
          <div className="--circles">
            {new Array(3).fill(0).map((_i, i) => (
              <RidesCircles q={i} turn={false} />
            ))}
          </div>
        </div>
        <WaitingQueue btn={false} />
      </div> */}
    </div>
  );
};

const Bookings: React.FC<{ orders: t_order[] }> = ({ orders }) => {
  const { branchId, eventId } = getQueryParams(() => {});
  const [showOrderDetails, setShowOrderDetails] = useState<t_order | null>(
    null
  );
  // const [showHistory, setShowHistory] = useState(false);
  const setOrderDetails = (order: t_order) => {
    setShowOrderDetails(order);
  };
  useEffect(() => {
    enqueueSnackbar('Booking(s) Successfully Retrieved!', {
      variant: 'info',
      autoHideDuration: 5000,
    });
  }, []);
  // if (showHistory) return <History />;

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
        <span className="--txt">All Race Passes</span>
        {/* <span onClick={() => setShowHistory(true)} className="--btn">
          History
        </span> */}
      </div>
      <div className="customer-race-passes-container">
        {orders.map((order, i) => (
          <div>
            <OrderCard order={order} setOrderDetails={setOrderDetails} />
            {i == orders.length - 1 ? null : <div className="--line"></div>}
          </div>
        ))}
      </div>
      <div className="bottom-btn-booking-container">
        <Button
          content="Buy More"
          disabled={false}
          onClick={() =>
            (window.location.href = `/?branchId=${branchId}&eventId=${eventId}`)
          }
        />
      </div>
    </div>
  );
};

export default Bookings;
