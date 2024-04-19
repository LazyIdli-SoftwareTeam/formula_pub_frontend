import { useState } from 'react';
import TextField from '../../../components/textField/TextField';
import './styles/retrive.css';

const Retrieve = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const onPhoneNumberChangeHandler = (value: string) => {
    if (phoneNumber.length === 10) return;
    setPhoneNumber(value);
  };
  return (
    <div className="customer-retrieve-container">
      <div className="customer-retrieve-top-heading">
        <span>Retrieve a booking</span>
      </div>
      <div className="customer-retrieve-top-container">
        <TextField
          label="Enter Your Registered Mobile Number :"
          onChange={(e) => onPhoneNumberChangeHandler(e.target.value)}
          onClick={() => {}}
          type={'tel'}
          value={phoneNumber}
        />
      </div>
      <div className="customer-retrieve-bottom-btn-info">
        <span>Retrieve</span>
      </div>
    </div>
  );
};

export default Retrieve;
