/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import TextField from '../../../components/textField/TextField';
import './styles/retrive.css';
import { getOrder } from '../../../api/order';
import { AxiosResponse } from 'axios';
import { PAGE_STATE } from '../BuyPass/Home';
import { FullScreenLoader } from '../../../components/loader/CustomLoader';
import { enqueueSnackbar } from 'notistack';
import Bookings from './Bookings';
import { t_order } from '../../../types/order';

// enum OTP_STATE {
//   UNKNOWN,
//   SENT,
//   ACCEPTED,
// }

const Retrieve = () => {
  // const [otpState, setOtpState] = useState({ state: OTP_STATE.UNKNOWN });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const [orders, setOrders] = useState<t_order[]>([]);
  const retrieveClickHandler = () => {
    if (checkDisabled()) return;
    const onAcceptGetOrder = (response: AxiosResponse) => {
      if (response.status === 202) {
        setPageState(PAGE_STATE.ACCEPTED);
        setShowBooking(true);
        const orders: t_order[] = [];
        for (const tempOrder of response.data.data) {
          const order: t_order = {
            _id: tempOrder._id,
            cart: {
              combos: tempOrder.combos.map((combo: any) => {
                return { combo: combo.comboId, iteration: combo.iterations };
              }),
            },
            host: tempOrder.host,
            orderDescription: '',
            rides: tempOrder.rides,
            totalAmount: 10000,
            users: tempOrder.players,
            couponApplied: tempOrder.couponAppliedId || undefined,
          };
          orders.push(order);
        }
        setOrders(orders);
      } else {
        enqueueSnackbar(response.data.message, {
          autoHideDuration: 5000,
          variant: 'error',
        });
        setPageState(PAGE_STATE.REJECTED);
      }
    };
    const onRejectGetOrder = (e: any) => {
      console.log(e);
      enqueueSnackbar(
        e?.response?.data?.message ||
          'Some error occurred while fetching the details try again later',
        { autoHideDuration: 5000, variant: 'error' }
      );
      setPageState(PAGE_STATE.REJECTED);
    };
    getOrder(onAcceptGetOrder, onRejectGetOrder, { phoneNumber: phoneNumber });
    // if (otpState.state == OTP_STATE.UNKNOWN) {
    //   if (checkDisabled()) return;
    //   setOtpState({ state: OTP_STATE.SENT });
    // } else if (otpState.state === OTP_STATE.SENT) {
    //   if (verifyOtp()) {
    //     setOtpState({ state: OTP_STATE.ACCEPTED });
    //   }
    // }
  };

  const getButtonText = () => {
    // if (otpState.state === OTP_STATE.SENT) {
    //   return 'CONFIRM OTP';
    // } else if (otpState.state === OTP_STATE.UNKNOWN) {
    return 'Retrieve';
    // }
  };

  const checkDisabled = () => {
    // if (otpState.state === OTP_STATE.UNKNOWN) {
    console.log(phoneNumber.length);
    if (phoneNumber.length != 10) return true;
    return false;
    // } else if (otpState.state === OTP_STATE.SENT) {
    //   if (enteredValue.join('').length != 4) return true;
    //   return false;
    // } else {
    //   return false;
    // }
  };

  // const verifyOtp = () =>
  //   parseInt(enteredValue.join('')) === 1234 ? true : false;

  const numberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != ' ' && e.target.value.length === 11) return;
    setPhoneNumber(e.target.value);
  };

  if (showBooking) return <Bookings orders={orders} />;
  if (pageState === PAGE_STATE.LOADING) return <FullScreenLoader />;

  return (
    <div className="customer-retrieve-container">
      <div className="customer-retrieve-top-heading">
        <span>Retrieve a booking</span>
      </div>
      <div className="customer-retrieve-top-container">
        <TextField
          label="Enter Your Registered Mobile Number :"
          onChange={numberChangeHandler}
          onClick={() => {}}
          type={'tel'}
          value={phoneNumber}
        />
      </div>
      {/* {otpState.state === OTP_STATE.SENT ? (
        <div className="otp">
          <Otp
            enteredValue={enteredValue}
            setEnteredValue={setEnteredValue}
            error={false}
          />
        </div>
      ) : null} */}
      <div
        className={
          checkDisabled()
            ? 'customer-retrieve-bottom-btn-info btn-disabled'
            : 'customer-retrieve-bottom-btn-info'
        }
      >
        <span onClick={retrieveClickHandler}>{getButtonText()}</span>
      </div>
    </div>
  );
};

export default Retrieve;
