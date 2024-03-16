import './styles.css';

const Otp = () => {
  return (
    <div className='global-otp-box-container'>
      <div className='global-otp-box-inputs'>
        <input type='tel' />
        <input type='tel' />
        <input type='tel' />
        <input type='tel' />
      </div>
      <div className='global-otp-box-btn'>
        <span>Resend OTP</span>
      </div>
    </div>
  );
};

export default Otp;
