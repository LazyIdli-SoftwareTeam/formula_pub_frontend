import { useState } from 'react';
import Otp from '../../components/otp/Otp';
import Cart from './components/cart/Cart';
import HostInfo from './components/hostInfo/HostInfo';
import './styles/verify-host.css';

const VerifyHost = () => {
  const [otpValue, setOtpValue] = useState(['', '', '', '']);
  return (
    <div className='customer-verify-host-container'>
      <Cart />
      <HostInfo />
      <Otp
        enteredValue={otpValue}
        error={false}
        setEnteredValue={setOtpValue}
      />
    </div>
  );
};
export default VerifyHost;
