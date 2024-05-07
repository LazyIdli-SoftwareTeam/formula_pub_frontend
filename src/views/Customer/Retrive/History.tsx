import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import './styles/history.css';
import { BookingStart, order } from './Bookings';
import { TiArrowSortedDown } from 'react-icons/ti';
// import { GeneratePlayerCard } from '../BuyPass/GenerateRacePass';
import { t_order } from '../../../types/order';
import OrderDetails from '../../../components/orderDetails/OrderDetails';
import React, { useState } from 'react';

const GetTag = () => {
  return <span className="order-card-tag">Completed</span>;
};

const CustomerHistoryCard: React.FC<{setOrderDetails: (order: t_order) => void}> = ({ setOrderDetails}) => {
  return (
    <Accordion disableGutters style={{ backgroundColor: '#494949' }}>
      <AccordionSummary
        expandIcon={<TiArrowSortedDown style={{ color: 'white' }} />}
      >
        <div className="customer-history-top">
          <BookingStart />
          <div className="customer-history-end">
            <span className="--details" onClick={(e) => {
                e.stopPropagation();
                 setOrderDetails(order)
            }}>Order details</span>
            <GetTag />
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails
        style={{
          marginLeft: '12px',
          marginRight: '12px',
          borderRadius: '8px',
        }}
      >
        <div className="customer-history-user-scores">
          {new Array(6).fill(0).map((_, i) => (
            <></>
            // <GeneratePlayerCard index={i} customValue="23:131:123" key={i} />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const History = () => {
  const [showOrderDetails, setShowOrderDetails] = useState<t_order | null>(
    null
  );
  const setOrderDetails = (order: t_order) => {
    setShowOrderDetails(order);
  };

  return (
    <div className="customer-history-container">
      {showOrderDetails ? (
        <OrderDetails
          order={showOrderDetails}
          closePopup={() => setShowOrderDetails(null)}
        />
      ) : null}
      <div className="customer-history-top-container">
        <span>Booking History</span>
      </div>
      <div className="customer-history-cards">
        {new Array(6).fill(0).map((_, i) => {
          return (
            <>
              <CustomerHistoryCard setOrderDetails={setOrderDetails} key={i} />
              {i == 5 ? null : <div className="--global-line"> </div>}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default History;
