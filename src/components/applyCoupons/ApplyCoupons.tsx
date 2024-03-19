import { RxCross1 } from 'react-icons/rx';
import './ApplyCoupons.css';
import React, { useState } from 'react';
import { t_coupon } from '../../types/coupon';

export const CouponApplied: React.FC<{ couponName: string }> = ({
  couponName,
}) => {
  return (
    <div className="global-coupon-applied-container">
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
    name: 'WARMTIRES',
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
  },
  {
    discountPercentage: 10,
    maxDiscountNumber: 200,
    minDiscountAmount: 200,
    name: 'WARMTIRES',
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

export const ViewCoupon: React.FC<{ coupon: t_coupon }> = ({ coupon }) => {
  return (
    <div className="global-coupon-overlay">
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
            <ViewCoupon coupon={coupon} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ApplyCoupons = () => {
  const [viewCoupon, setViewCoupon] = useState(false);
  return (
    <div className="global-apply-coupons-container">
      {viewCoupon ? (
        <ViewAllCoupons closePopup={() => setViewCoupon(false)} />
      ) : null}
      <div className="global-apply-coupon-top">
        <span>Apply Coupons</span>
      </div>
      {/* <div className="global-apply-coupons-input">
        <input
          style={{
            backgroundColor: '#494949',
            border: 'none',
            outline: 'none',
            paddingLeft: '10px',
            width: '85%',
          }}
        />
        <span className="--btn">Apply</span>
      </div> */}
      <CouponApplied couponName="something" />
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
