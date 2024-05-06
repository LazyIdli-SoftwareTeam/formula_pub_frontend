/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from '@mui/material';
import { IoMdArrowDropdown } from 'react-icons/io';
import './styles/rides.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/hexaButton/Button';
import { t_order } from '../../../types/order';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { t_cart } from '../../../types/cart';
import { calculateTotalRides } from '../../../utils/cartTotal';
import { editPhoneNumber, editUserName } from '../../../state/order';
import { t_userInfo } from '../../../types/userInfo';

export const RideDetail: React.FC<{ cart: t_cart }> = ({ cart }) => {
  return (
    <div className="customer-ride-details-container">
      <div className="customer-ride-details-top-head">
        <div className="--combo">Combo</div>
        <div className="--quantity">Quantity</div>
        <div className="--rides">Rides</div>
      </div>
      {cart.combos.map((combo, i) => {
        return (
          <div key={i} className="customer-ride-details-tail">
            <div className="customer-ride-details-start --combo">
              <div className="--img">
                <img src="/assets/cart/Frame 1200 copy.svg" />
              </div>
              <div className="--text">
                <span>{combo.combo.comboName}</span>
                <span className="--slot">{combo.combo.numberOfRides} Ride</span>
              </div>
            </div>
            <div className="customer-ride-details-quantity --quantity">
              <span className="--quantity">
                <span className="--clr-gold">x</span>
                {combo.iteration}
              </span>
            </div>
            <div className="customer-ride-details-rides --rides">
              <span className="--rides">
                {combo.iteration * combo.combo.numberOfRides}
              </span>
            </div>
          </div>
        );
      })}

      <div className="customer-ride-details-total">
        <span className="--total">Total</span>
        <span className="--clr-gold --rides">{calculateTotalRides(cart)}</span>
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
  editPhoneNumber: (index: number, value: string) => void;
  editUserName: (index: number, value: string) => void;
  user: t_userInfo;
}> = ({ index, editPhoneNumber, editUserName, user }) => {
  const [accordionOpened, setAccordionOpened] = useState(false);

  const onChangeName = (e: any) => {
    editUserName(index, e.target.value);
  };
  const onChangePhoneNumber = (e: any) => {
    editPhoneNumber(index, e.target.value);
  };

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
      <div key={index} className="customer-ride-player-information-inputs">
        <TextField
          size="small"
          placeholder="Name"
          sx={TextFieldStyle}
          // onChange={onChangeName}
          onClick={() => {}}
          // value={user ? user.name : ''}
        />
        <TextField
          size="small"
          placeholder="Mobile Number"
          sx={TextFieldStyle}
          // onChange={onChangePhoneNumber}
          onClick={() => {}}
          // value={user ? user.phoneNumber : ''}
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
            <PlayerAccordionCloseInfo index={index + 1} />
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
  const order: t_order = useSelector((state: RootState) => state.order);
  const navigate = useNavigate();
  const [users, setUsers] = useState<any>({});
  const totalRides = calculateTotalRides(order.cart);

  useEffect(() => {
    const tempUsers = [];
    const obj = {
      name: '',
      phoneNumber: '',
      type: 'user',
    };
    for (let i = 0; i < totalRides; i++) {
      tempUsers.push(obj);
    }
    console.log(tempUsers);
    setUsers(tempUsers);
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

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
            {totalRides}
          </span>
          rides
        </span>
      );
    }
  };

  const editUserName = (index: number, value: string) => {
    const obj = {
      name: value,
      phoneNumber:
        users[index as keyof typeof users].phoneNumber &&
        users[index as keyof typeof users].phoneNumber.length
          ? users[index as keyof typeof users].phoneNumber
          : '',
      type: 'user',
    };
    setUsers({ ...users, [index]: obj });
  };
  const editPhoneNumber = (index: number, value: string) => {
    const obj = {
      phoneNumber: value,
      name:
        users[index as keyof typeof users].name &&
        users[index as keyof typeof users].name.length
          ? users[index as keyof typeof users].name
          : '',
      type: 'user',
    };
    setUsers({ ...users, [index]: obj });
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
            <RideDetail cart={order.cart} />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="customer-rides-container-player-information">
        <span>Fill Player Information</span>
      </div>
      <div className="customer-rides-player-information">
        {new Array(totalRides).fill(0).map((_, i) => (
          <PlayerRideInformation
            index={i}
            key={i}
            editUserName={editUserName}
            editPhoneNumber={editPhoneNumber}
            user={users[i as keyof typeof users]}
          />
        ))}
      </div>
      <div className="customer-rides-bottom-btn">
        <Button
          content="Generate Race Passes"
          disabled
          sx={{ width: '80%', margin: 'auto' }}
          onClick={() => navigate('/pass')}
        />
      </div>
    </div>
  );
};

export default Rides;
