/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '../../../../../components/hexaButton/Button';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import TextField from '../../../../../components/textField/TextField';
import { useState } from 'react';
import Otp from '../../../../../components/otp/Otp';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { t_order } from '../../../../../types/order';
import validator from 'validator';
import { setHostName, setHostPhoneNumber } from '../../../../../state/order';

enum OTP_STATE {
  VERIFIED,
  SENT,
  UNKNOWN,
}
const DEFAULT_ERROR_STATE = {
  name: {
    error: false,
    helperText: '',
  },
  phoneNumber: {
    error: false,
    helperText: '',
  },
  otp: {
    error: false,
    helperText: '',
  },
};

const HostInfo = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(OTP_STATE.UNKNOWN);
  const [otpValue, setOtpValue] = useState(['', '', '', '']);
  const [error, setError] = useState(DEFAULT_ERROR_STATE);
  const [tos, setTos] = useState(false);
  const order: t_order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const onBtnClick = () => {
    if (otpSent === OTP_STATE.UNKNOWN) {
      console.log(order.host.name.length);
      if (order.host.name.length === 0) {
        console.log('her');
        return setError({
          ...error,
          name: { error: true, helperText: 'Invalid name' },
        });
      }
      if (order.host.phoneNumber.length != 10) {
        return setError({
          ...error,
          phoneNumber: { error: true, helperText: 'Invalid phone number' },
        });
      }
      if (getBtnDisabled()) return;
      setOtpSent(OTP_STATE.SENT);
    } else if (otpSent === OTP_STATE.SENT && otpValue.join('') === '1234') {
      if (getBtnDisabled()) return;
      navigate('/payment');
    } else if (otpSent === OTP_STATE.SENT && otpValue.join('') != '1234') {
      alert('Invalid otp value');
    }
  };

  const getBtnDisabled = () => {
    if (otpSent === OTP_STATE.SENT) {
      return otpValue.join('').length != 4 ? true : false;
    } else {
      return order.host.phoneNumber.length != 10 ||
        order.host.name.length === 0 ||
        !tos
        ? true
        : false;
    }
  };

  const getButtonContent = () => {
    if (otpSent === OTP_STATE.UNKNOWN) return 'Confirm';
    if (otpSent === OTP_STATE.SENT) return 'Confirm OTP';
    return 'Confirm';
  };

  const onChangeName = (e: any) => {
    setError(DEFAULT_ERROR_STATE);
    if (e.target.value != '' && validator.isAlpha(e.target.value)) {
      dispatch(setHostName(e.target.value));
    }
  };

  const onChangePhoneNumber = (e: any) => {
    if (e.target.value.length > 10) return;
    setError(DEFAULT_ERROR_STATE);
    if (e.target.value != '' && validator.isNumeric(e.target.value)) {
      dispatch(setHostPhoneNumber(e.target.value));
    }
  };

  return (
    <div className="host-info-container">
      <div className="host-info-container-top-heading">
        <span>Verify Host</span>
      </div>
      <div className="host-info-container-inputs">
        <TextField
          label="Enter Host’s Name  "
          size="small"
          onChange={onChangeName}
          error={error.name.error}
          helperText={error.name.helperText}
          disabled={otpSent === OTP_STATE.SENT}
          onClick={() => {}}
          value={order.host.name}
        />
        <TextField
          label="Enter Host’s Mobile Number  "
          size="small"
          onChange={onChangePhoneNumber}
          error={error.phoneNumber.error}
          helperText={error.phoneNumber.helperText}
          disabled={otpSent === OTP_STATE.SENT}
          onClick={() => {}}
          value={order.host.phoneNumber}
        />
      </div>
      <div className="host-info-tos-container">
        <input
          type="checkbox"
          checked={tos}
          onChange={(e) => setTos(e.target.checked)}
        />
        <span className="--tos">
          I accept whatever happens during the game im totally responsible for
          the causes. lorem ipsum
        </span>
      </div>
      {otpSent === OTP_STATE.SENT ? (
        <Otp
          enteredValue={otpValue}
          setEnteredValue={setOtpValue}
          error={error.otp.error}
        />
      ) : null}
      <div className="host-info-container-bottom">
        <Button
          content={getButtonContent()}
          disabled={getBtnDisabled()}
          onClick={onBtnClick}
        />
      </div>
    </div>
  );
};

export default HostInfo;
