/* eslint-disable @typescript-eslint/no-explicit-any */
import { RxCross1 } from 'react-icons/rx';
import './ApplyCoupons.css';
import React, { useEffect, useState } from 'react';
import { t_coupon } from '../../types/coupon';
import { t_order } from '../../types/order';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { applyCoupon, removeCoupon } from '../../state/order';
import { PAGE_STATE } from '../../views/Customer/BuyPass/Home';
import { getCoupons } from '../../api/combos';
import { AxiosResponse } from 'axios';
import CustomLoader from '../loader/CustomLoader';

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
          <span className="--name">{coupon.couponName}</span>
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

export const ViewAllCoupons: React.FC<{
  closePopup: () => void;
  coupons: t_coupon[];
}> = ({ closePopup, coupons }) => {
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
          {coupons.map((coupon, i) => (
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
  const [coupons, setCoupons] = useState<t_coupon[]>([]);
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  useEffect(() => {
    const getCouponAccept = (response: AxiosResponse) => {
      if (response.status === 202) {
        setPageState(PAGE_STATE.ACCEPTED);
        setCoupons(response.data.data);
      } else {
        setPageState(PAGE_STATE.REJECTED);
      }
    };
    const getCouponReject = (e: any) => {
      console.log(e);
      setPageState(PAGE_STATE.REJECTED);
    };

    getCoupons(getCouponAccept, getCouponReject);
    setPageState(PAGE_STATE.LOADING);
  }, []);

  const [couponValue, setCouponValue] = useState({ error: false, value: '' });
  const applyHandler = () => {
    if (!coupons) return;
    const index = coupons.findIndex(
      (coupon) => coupon.couponName.toLowerCase() === couponValue.value.toLowerCase()
    );
    if (index < 0) {
      setCouponValue({ ...couponValue, error: true });
      alert('No coupon found');
    } else {
      dispatch(applyCoupon(coupons[index]));
    }
  };
  const changeHandler = (e: any) => {
    setCouponValue({ value: e.target.value, error: false });
  };

  if (pageState === PAGE_STATE.LOADING) return <CustomLoader />;

  return (
    <div className="global-apply-coupons-container">
      {viewCoupon ? (
        <ViewAllCoupons
          coupons={coupons}
          closePopup={() => setViewCoupon(false)}
        />
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
              backgroundColor: '#494949',
              border: couponValue.error ? '1px solid red' : 'none',
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
        <CouponApplied couponName={order.couponApplied!.couponName!} />
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
