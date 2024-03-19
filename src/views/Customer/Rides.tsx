/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from '@mui/material';
import { IoMdArrowDropdown } from 'react-icons/io';
import './styles/rides.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/hexaButton/Button';

export const RideDetail = () => {
  return (
    <div className="customer-ride-details-container">
      <div className="customer-ride-details-top-head">
        <div className="--combo">Combo</div>
        <div className="--quantity">Quantity</div>
        <div className="--rides">Rides</div>
      </div>
      <div className="customer-ride-details-tail">
        <div className="customer-ride-details-start --combo">
          <div className="--img">
            <img src="/assets/cart/Frame 1200 copy.svg" />
          </div>
          <div className="--text">
            <span>Premium Long McLong Long Combo qahedjk hdw hdqk jhqwkhd</span>
            <span className="--slot">1 Ride</span>
          </div>
        </div>
        <div className="customer-ride-details-quantity --quantity">
          <span className="--quantity">
            <span className="--clr-gold">x</span>1
          </span>
        </div>
        <div className="customer-ride-details-rides --rides">
          <span className="--rides">7</span>
        </div>
      </div>
      <div className="customer-ride-details-total">
        <span className="--total">Total</span>
        <span className="--clr-gold --rides">7</span>
      </div>
    </div>
  );
};

export const PlayerAccordionCloseInfo: React.FC<{ index: number }> = ({
  index,
}) => {
  return (
    <div className="customer-ride-player-information-container-head">
      <div className="--name">
        <span className="--index">{index}</span>
      </div>
      <div className="--text">
        <span className="--name">Name</span>
        <span className="--num">Mobile no.</span>
      </div>
    </div>
  );
};

export const PlayerRideInformation: React.FC<{
  index: number;
}> = ({ index }) => {
  const [accordionOpened, setAccordionOpened] = useState(false);
  const TextFieldStyle = {
    width: '100%',
    background: '#494949',
    border: 'none',
    borderRadius: 'none',
  };

  const PlayerTag = () => {
    return <div className="customer-ride-player-tag">Player {index}</div>;
  };
  const PlayerInformationInput = () => {
    return (
      <div className="customer-ride-player-information-inputs">
        <TextField
          size="small"
          placeholder="Name"
          sx={TextFieldStyle}
          onChange={() => {}}
          onClick={() => {}}
          value=""
        />
        <TextField
          size="small"
          placeholder="Mobile Number"
          sx={TextFieldStyle}
          onChange={() => {}}
          onClick={() => {}}
          value=""
        />
      </div>
    );
  };

  return (
    <div className="customer-ride-player-information-container">
      <Accordion
        expanded={accordionOpened}
        onChange={() => setAccordionOpened(!accordionOpened)}
        disableGutters
      >
        <AccordionSummary
          expandIcon={
            <IoMdArrowDropdown color="white" strokeWidth="2" fontSize="20px" />
          }
        >
          {accordionOpened ? (
            <PlayerTag />
          ) : (
            <PlayerAccordionCloseInfo index={index} />
          )}
        </AccordionSummary>
        <AccordionDetails>
          <PlayerInformationInput />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Rides = () => {
  const [numberOfRides, setNumberOfRides] = useState(false);
  const navigate = useNavigate(); 
  const GetAccordianText = () => {
    if (numberOfRides) {
      return <span>No. of rides</span>;
    } else {
      return (
        <span>
          You have bought{' '}
          <span
            className="--clr-gold"
            style={{ fontSize: '18px', fontWeight: '900' }}
          >
            7
          </span>
          rides
        </span>
      );
    }
  };

  return (
    <div className="customer-rides-container">
      <div className="custom-rides-booking-top">
        <Accordion
          disableGutters
          style={numberOfRides ? { background: '#2F2F2F' } : {}}
          onChange={() => setNumberOfRides(!numberOfRides)}
          expanded={numberOfRides}
        >
          <AccordionSummary
            expandIcon={
              <IoMdArrowDropdown
                color="white"
                strokeWidth="2"
                fontSize="20px"
              />
            }
          >
            <GetAccordianText />
          </AccordionSummary>
          <AccordionDetails>
            <RideDetail />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="customer-rides-container-player-information">
        <span>Fill Player Information</span>
      </div>
      <div className="customer-rides-player-information">
        {new Array(9).fill(0).map((_, i) => (
          <PlayerRideInformation index={i + 1} />
        ))}
      </div>
      <div className="customer-rides-bottom-btn">
        <Button content="Generate Race Passes" disabled onClick={() => navigate('/pass')} />
      </div>
    </div>
  );
};

export default Rides;
