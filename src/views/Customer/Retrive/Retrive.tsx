import React, { useState } from 'react';
import TextField from '../../../components/textField/TextField';
import './styles/retrive.css';
import Otp from '../../../components/otp/Otp';
import Bookings from './Bookings';

enum OTP_STATE {
  UNKNOWN,
  SENT,
  ACCEPTED,
}

const Retrieve = () => {
  const [enteredValue, setEnteredValue] = useState(['', '', '', '']);
  const [otpState, setOtpState] = useState({ state: OTP_STATE.UNKNOWN });
  const [phoneNumber, setPhoneNumber] = useState('');
  const retriveClickHandler = () => {
    if (otpState.state == OTP_STATE.UNKNOWN) {
      if (checkDisabled()) return;
      setOtpState({ state: OTP_STATE.SENT });
    } else if (otpState.state === OTP_STATE.SENT) {
      if (verifyOtp()) {
        setOtpState({ state: OTP_STATE.ACCEPTED });
      }
    }
  };

  const getButtonText = () => {
    if (otpState.state === OTP_STATE.SENT) {
      return 'CONFIRM OTP';
    } else if (otpState.state === OTP_STATE.UNKNOWN) {
      return 'Retrieve';
    }
  };

  const checkDisabled = () => {
    if (otpState.state === OTP_STATE.UNKNOWN) {
      console.log(phoneNumber.length)
      if (phoneNumber.length != 10) return true;
      return false;
    } else if (otpState.state === OTP_STATE.SENT) {
      if (enteredValue.join('').length != 4) return true;
      return false;
    } else {
      return false;
    }
  };

  const verifyOtp = () =>
    parseInt(enteredValue.join('')) === 1234 ? true : false;

  const numberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != ' ' && e.target.value.length === 11) return;
    setPhoneNumber(e.target.value);
  };

  if (otpState.state === OTP_STATE.ACCEPTED) return <Bookings />;

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
      {otpState.state === OTP_STATE.SENT ? (
        <div className="otp">
          <Otp
            enteredValue={enteredValue}
            setEnteredValue={setEnteredValue}
            error={false}
          />
        </div>
      ) : null}
      <div
        className={
          checkDisabled()
            ? 'customer-retrieve-bottom-btn-info btn-disabled'
            : 'customer-retrieve-bottom-btn-info'
        }
      >
        <span onClick={retriveClickHandler}>{getButtonText()}</span>
      </div>
    </div>
  );
};

export default Retrieve;
