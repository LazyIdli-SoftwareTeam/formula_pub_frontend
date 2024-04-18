import React from 'react';
import { PlayerAccordionCloseInfo } from './Rides';
import { Accordion, AccordionSummary } from '@mui/material';
import './styles/generate-race-pass.css';
import { IoInformationCircle } from 'react-icons/io5';
import UserQueue from './components/userQueue/UserQueue';

const GenerateRacePass = () => {
  const TailElement = () => {
    const generateRandomPass = () => Math.floor(Math.random() * 90000 + 10000);
    const pass = generateRandomPass().toString().split('').join(' ');
    return (
      <div className="customer-unique-race-pass">{pass}</div>
    );
  };

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
            <PlayerAccordionCloseInfo index={index} />
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
      <div className="customer-generate-race-pass-inputs">
        {new Array(9).fill(0).map((_, i) => {
          return <GeneratePlayerCard key={i} index={i} />;
        })}
      </div>
      <div className="customer-generate-race-information">
        <IoInformationCircle size="16" />
        <span>Race Pass mandatory for ride. Do not share.</span>
      </div>
      <div className="customer-bottom-race-queue">
        <UserQueue rides={4} minIndex={2} turn={true} />
      </div>
    </div>
  );
};

export default GenerateRacePass;
