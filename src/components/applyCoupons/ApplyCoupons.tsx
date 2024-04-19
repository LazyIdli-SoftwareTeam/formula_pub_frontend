/* eslint-disable @typescript-eslint/no-explicit-any */
import { RxCross1 } from 'react-icons/rx';
import './ApplyCoupons.css';
import React, { useState } from 'react';
import { t_coupon } from '../../types/coupon';
import { t_order } from '../../types/order';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { applyCoupon, removeCoupon } from '../../state/order';

export const CouponApplied: React.FC<{ couponName: string }> = ({
  couponName,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(removeCoupon())}
      className="global-coupon-applied-container"
    >
      <span className="--cross">
        <RxCross1 strokeWidth="1.5" />
      </span>
      <span className="--name">{couponName}</span>
      <span className="--cross --invisible">
        <RxCross1 strokeWidth="1.5" />
      </span>
    </div>
  );
};

const Coupons: t_coupon[] = [
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    id: 1,
    name: 'WARMTIRES',
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
    id: 2,
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
    id: 3,
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
    id: 4,
  },
];

export const CreateCircle: React.FC<{
  index: number;
  styles?: { [key: string]: string };
  direction: 'row' | 'column';
}> = ({ direction, index, styles }) => {
  return (
    <div
      style={{ ...styles, flexDirection: direction }}
      className="global-semi-circle"
    >
      {new Array(index).fill(0).map((_, i) => (
        <span key={i} className="--circle"></span>
      ))}
    </div>
  );
};

export const ViewCoupon: React.FC<{
  coupon: t_coupon;
  closePopup: () => void;
}> = ({ coupon, closePopup }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(applyCoupon(coupon));
        closePopup();
      }}
      className="global-coupon-overlay"
    >
      <CreateCircle direction="column" index={5} styles={{ left: '-5px' }} />
      <div className="global-view-coupon-container">
        <div className="global-view-coupon-start">
          <span className="--name">{coupon.name}</span>
          <span className="--text">
            {coupon.discountPercentage}% discount on your first ride
          </span>
        </div>
        <div className="global-view-coupon-end">
          <span className="--discount">{coupon.discountPercentage}%</span>
          <span className="--text">DISCOUNT</span>
        </div>
      </div>
      <CreateCircle direction="column" index={5} styles={{ right: '-5px' }} />
    </div>
  );
};

export const ViewAllCoupons: React.FC<{ closePopup: () => void }> = ({
  closePopup,
}) => {
  return (
    <div className="global-view-all-coupons-overlay">
      <div className="global-view-all-coupons-container">
        <div className="global-view-all-top-heading">
          <span className="--text">View All Coupons</span>
          <span onClick={closePopup} className="--cross">
            <RxCross1 strokeWidth="2" />
          </span>
        </div>
        <div className="global-view-all-coupons">
          {Coupons.map((coupon, i) => (
            <ViewCoupon coupon={coupon} key={i} closePopup={closePopup} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ApplyCoupons = () => {
  const [viewCoupon, setViewCoupon] = useState(false);
  const order: t_order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();
  const [couponValue, setCouponValue] = useState({ error: false, value: '' });
  const applyHandler = () => {
    const index = Coupons.findIndex(
      (coupon) => coupon.name.toLowerCase() === couponValue.value
    );
    if (index < 0) {
      setCouponValue({ ...couponValue, error: true });
      alert('No coupon found');
    } else {
      dispatch(applyCoupon(Coupons[index]));
    }
  };
  const changeHandler = (e: any) => {
    setCouponValue({ value: e.target.value, error: false });
  };

  return (
    <div className="global-apply-coupons-container">
      {viewCoupon ? (
        <ViewAllCoupons closePopup={() => setViewCoupon(false)} />
      ) : null}
      <div className="global-apply-coupon-top">
        <span>Apply Coupons</span>
      </div>
      {!order.couponApplied ? (
        <div className={`global-apply-coupons-input`}>
          <input
            value={couponValue.value}
            onChange={changeHandler}
            style={{
              backgroundColor: '#181818',
              border: couponValue.error ? '1px solid red' : '1.5px solid #494949',
              outline: 'none',
              borderRadius: '4px',
              paddingLeft: '10px',
              width: '70%',
            }}
          />
          <span className="--btn" onClick={applyHandler}>
            Apply
          </span>
        </div>
      ) : (
        <CouponApplied couponName={order.couponApplied!.name!} />
      )}
      <div
        onClick={() => setViewCoupon(true)}
        className="global-apply-coupon-bottom"
      >
        <span>View All Coupons</span>
      </div>
    </div>
  );
};

export default ApplyCoupons;
