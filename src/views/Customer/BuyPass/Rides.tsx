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
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { t_order } from '../../../types/order';
import { RootState } from '../../../store';
import { t_cart } from '../../../types/cart';
import { calculateTotalRides } from '../../../utils/cartTotal';
import { t_userInfo } from '../../../types/userInfo';
import { getQueryParams } from '../../../api/query';
import { useDispatch, useSelector } from 'react-redux';
import { PAGE_STATE } from './Home';
import { editPlayer } from '../../../api/player';
import { AxiosResponse } from 'axios';
import CustomLoader from '../../../components/loader/CustomLoader';
import { enqueueSnackbar } from 'notistack';
import { setUsers } from '../../../state/order';

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

export const PlayerAccordionCloseInfo: React.FC<{
  index: number;
  name?: string;
  racePass?: string;
  phoneNumber?: string;
}> = ({ index, name, phoneNumber, racePass }) => {
  return (
    <div className="customer-ride-player-information-container-head">
      <div className="--name">
        <span className="--index">{index}</span>
      </div>
      <div className="--text">
        <span className="--name">{name || 'Name'}</span>
        <span className="--num">{phoneNumber || 'Mobile no.'}</span>
      </div>
      {racePass ? <div className="--pass">
        <span> {racePass}</span>
      </div> : null}
    </div>
  );
};

export const PlayerRideInformation: React.FC<{
  index: number;
  user: t_userInfo;
  enableBtn: () => void;
  changeUser: (index: number, newUser: t_userInfo) => void;  
  disableBtn: () => void;
}> = ({ index, user, disableBtn, enableBtn, changeUser }) => {
  const [accordionOpened, setAccordionOpened] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);

  const changeInfo = (playerId: string) => {
    if (!nameRef.current || !phoneNumberRef.current) return;
    const onAcceptEditPlayer = (response: AxiosResponse) => {
      if (response.status === 202) {
        setPageState(PAGE_STATE.ACCEPTED);
        changeUser(index, response.data.data);
      } else {
        setPageState(PAGE_STATE.REJECTED);
        enqueueSnackbar('Error occurred try again later', {
          autoHideDuration: 5000,
          variant: 'error',
        });
      }
    };
    const onRejectEditPlayer = (error: any) => {
      setPageState(PAGE_STATE.REJECTED);
      enqueueSnackbar('Error occurred try again later', {
        autoHideDuration: 5000,
        variant: 'error',
      });
    };
    setPageState(PAGE_STATE.LOADING);
    editPlayer(onAcceptEditPlayer, onRejectEditPlayer, {
      userName: nameRef.current.value || user.userName ||  '',
      phoneNumber: phoneNumberRef.current.value || user.phoneNumber || '',
      playerId: playerId,
    });
  };

  const TextFieldStyle = {
    width: '100%',
    background: '#494949',
    border: 'none',
    borderRadius: 'none',
  };

  const PlayerTag = () => {
    return <div className="customer-ride-player-tag">Player {index + 1}</div>;
  };
  const PlayerInformationInput = () => {
    return (
      <div key={index} className="customer-ride-player-information-inputs">
        <TextField
          size="small"
          placeholder="Name"
          sx={TextFieldStyle}
          ref={nameRef}
          key={1}
          onChange={(e) => nameRef.current!.value = e.target.value}
          defaultValue={user.userName}
        />
        <TextField
          size="small"
          key={2}
          placeholder="Mobile Number"
          sx={TextFieldStyle}
          defaultValue={user.phoneNumber}
          onChange={(e) => phoneNumberRef.current!.value = e.target.value}
          ref={phoneNumberRef}
        />
      </div>
    );
  };
  if (pageState === PAGE_STATE.LOADING) return <CustomLoader />;

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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <PlayerTag />
              <span className="customer-ride-player-pass-accordion">
                {user.code}
              </span>
            </div>
          ) : (
            <PlayerAccordionCloseInfo
              index={index + 1}
              racePass={user.code!}
              name={user.userName}
              phoneNumber={user?.phoneNumber}
            />
          )}
        </AccordionSummary>
        <AccordionDetails>
          <PlayerInformationInput />
          <span
            onClick={() => changeInfo(user._id!)}
            className="save-change-btn"
          >
            Save Changes
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Rides = () => {
  const [numberOfRides, setNumberOfRides] = useState(false);
  const order: t_order = useSelector((state: RootState) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const totalRides = calculateTotalRides(order.cart);
  const { branchId, eventId } = getQueryParams(() => {});
  const [btnDisabled, setBtnDisabled] = useState(false);
  const orderL = localStorage.getItem('order');
  useEffect(() => {
    if (!orderL) {
      window.location.href = `/?branchId=${branchId}&eventId=${eventId}`;
    }
  }, []);

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
        {order.users.map((user, i) => (
          <PlayerRideInformation
            index={i}
            key={i}
            changeUser={(index: number, newUser: t_userInfo) => {
              const users = [...order.users]; 
              users[index] = newUser; 
              dispatch(setUsers(users)); 
            }}
            user={user}
            enableBtn={() => setBtnDisabled(false)}
            disableBtn={() => setBtnDisabled(true)}
          />
        ))}
      </div>
      {/* <div className="customer-rides-bottom-btn">
        <Button
          content="Generate Race Passes"
          disabled
          sx={{ width: '80%', margin: 'auto' }}
          onClick={() => navigate('/pass')}
        />
      </div> */}
    </div>
  );
};

export default Rides;
