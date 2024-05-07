import { RxCross1 } from 'react-icons/rx';
import { t_order } from '../../types/order';
import React from 'react';
import Bill from '../bill/Bill';
import './styles.css';

const OrderInfo: React.FC<{ order: t_order }> = ({ order }) => {
  return (
    <div className="order-info-container">
      <div className="--top">
        <span>Order details</span>
      </div>
      <div className="--box">
        <span className="--head">Booking ID : </span>
        <span className="--text">{order._id}</span>
      </div>
      <div className="--box">
        <span className="--head">Date : </span>
        <span className="--text">Thursday 9:03pm (08/03/2024)</span>
      </div>
      <div className="--box">
        <span className="--head">Payment : </span>
        <span className="--text">Paid Using UPI</span>
      </div>
    </div>
  );
};

const OrderDetails: React.FC<{ closePopup: () => void; order: t_order }> = ({
  closePopup,
  order,
}) => {
  return (
    <div className="customer-order-details-overlay">
      <div className="customer-order-details-container">
        <div className="customer-order-top">
          <span className="--text">FormulaPub Event at GILLY'S</span>
          <span onClick={closePopup} className="--cross">
            <RxCross1 />
          </span>
        </div>
        <div className="customer-order-cart">
          <Bill order={order} />
        </div>
        <div className="customer-order-bottom">
          <OrderInfo  order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
