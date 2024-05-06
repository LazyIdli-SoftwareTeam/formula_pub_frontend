import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerAccordionCloseInfo } from './Rides';
import { Accordion, AccordionSummary } from '@mui/material';
import './styles/generate-race-pass.css';
import { IoInformationCircle } from 'react-icons/io5';
import UserQueue from './components/userQueue/UserQueue';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { t_order } from '../../../types/order';
import { calculateTotalRides } from '../../../utils/cartTotal';
import Button from '../../../components/hexaButton/Button';

import './styles/view-bill.css';



const GenerateRacePass = () => {
  const order: t_order = useSelector((state: RootState) => state.order);
  const rides = calculateTotalRides(order.cart);
  const TailElement = () => {
    const generateRandomPass = () => Math.floor(Math.random() * 90000 + 10000);
    const pass = generateRandomPass().toString().split('').join(' ');
    return (
      <div className="customer-unique-race-pass">{pass}</div>
    );
  };

  
    
  


  

  
  const navigate = useNavigate(); 

  const GeneratePlayerCard: React.FC<{ index: number }> = ({ index }) => {
    
    return (
      <div className="customer-player-card-information">
        <Accordion disableGutters expanded={false}>
          <AccordionSummary
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <PlayerAccordionCloseInfo index={index + 1} />
            <TailElement />
          </AccordionSummary>
        </Accordion>
      </div>
    );
  };
  return (
    <div className="customer-generate-race-pass">
      <div className='customer-generate-race-pass-heading'>
      <span className='--btn --hidden'>History</span>
        <span className='--txt'>Race Passes</span>
        <span className='--btn'>History</span>
      </div>
      <div className="customer-generate-combined-data">
      <div className="user-booking-top-section">
      <div className="user-booking-top-section-start">
        <span className="--text">{rides} Rides</span>
      </div>
      <div className="user-booking-top-section-end">
        <span className="--booking">Booking ID : 654321 </span>
        <span className="--booking-info">Thursday 9:03pm | 08/03/2024</span>
      </div>
    </div>

      <div className="customer-generate-race-pass-inputs">
        {new Array(rides).fill(0).map((_, i) => {
          return <GeneratePlayerCard key={i} index={i} />;
        })}
      </div>
      
      <div className="customer-bottom-race-queue">
        <UserQueue rides={rides} minIndex={2} turn={true} />
      </div>
    </div>
    <div className="customer-generate-race-information">
    <IoInformationCircle size="16" />
    <span>Race Pass mandatory for ride. Do not share.</span>
  </div>
  <div className="customer-futher-information-section">
    <span className='cutsomer-futher-information-heading'>For further information:</span>
    <div className="customer-generate-race-button --btm-btn">
          <Button
            content="Check Race Queue"
            sx={{ width: '85%', margin: 'auto' }}
            disabled={false}
            onClick={() => navigate('/rides')}
          />
        </div>
  </div>
  
    </div>
    
  );
};

export default GenerateRacePass;