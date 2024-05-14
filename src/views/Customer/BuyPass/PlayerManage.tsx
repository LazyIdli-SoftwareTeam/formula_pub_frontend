/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import TextField from '../../../components/textField/TextField';
import './styles/player-manage.css';
import { changeRideInfo, getRide } from '../../../api/ride';
import { AxiosResponse } from 'axios';
import { PAGE_STATE } from './Home';
import { ClipLoaderSmall } from '../../../components/loader/CustomLoader';
import { enqueueSnackbar } from 'notistack';

type t_user = {
  userName?: string;
  phoneNumber?: string;
  code?: string;
  score?: string;
  _id: string;
};
const autoHide = 3000;

const GetPlayerInfo: React.FC<{ user: t_user; goBack: () => void }> = ({
  user,
  goBack,
}) => {
  const [userName, setUserName] = useState(user.userName || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');
  const [tosChecked, setTosChecked] = useState(false);
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const getDisabled = () => {
    if (userName.length === 0) return true;
    if (phoneNumber.length > 1 && phoneNumber.length != 10) return true;
    if (!tosChecked) return true;
    return false;
  };

  const changeRideInfoHandler = async () => {
    const onChangeAccept = (response: AxiosResponse) => {
      if (response.status === 202) {
        enqueueSnackbar('Saved', {
          autoHideDuration: autoHide,
          variant: 'success',
        });
        setPageState(PAGE_STATE.ACCEPTED);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        setPageState(PAGE_STATE.REJECTED);
        enqueueSnackbar('Try again later', {
          autoHideDuration: autoHide,
          variant: 'error',
        });
      }
    };
    const onChangeReject = (e: any) => {
      setPageState(PAGE_STATE.REJECTED);
      enqueueSnackbar(
        e?.response?.status === 502
          ? 'Player with same name already exists'
          : 'Try again later',
        {
          autoHideDuration: autoHide,
          variant: 'error',
        }
      );
    };
    setPageState(PAGE_STATE.LOADING);
    changeRideInfo(onChangeAccept, onChangeReject, {
      userName: userName,
      phoneNumber: phoneNumber.length == 0 ? ' ' : phoneNumber,
      code: user.code,
    });
  };

  const GetTos = () => {
    return (
      <div className="get-player-info-tos-container">
        <span className="--heading">T & C </span>
        <span>
          1. I agree that I will follow all instructions of the operator.
        </span>
        <span>
          2. I agree that the organizer may change the terms under some
          unforeseen conditions.
        </span>
        <span>
          3. I agree that I don't hold the organizers liable for any damages
          arising out of my participation in this event
        </span>
        <span className="--tos">
          <input
            onChange={(e) => setTosChecked(e.target.checked)}
            type="checkbox"
            checked={tosChecked}
          />{' '}
          I accept
        </span>
      </div>
    );
  };
  const phoneNumberChangeHandler = (e: any) => {
    if (e.target.value.length > 10) return;
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="get-player-info-container">
      <div className="get-player-info-top">
        <div className="get-player-info-heading">
          <span>Register</span>
        </div>
        <div className="--inputs">
          {Object.keys(user).map((key) => {
            if (
              key === '_id' ||
              key === 'branchId' ||
              key === 'eventId' ||
              key === '__v' ||
              key === 'createdAt' ||
              key === 'updatedAt'
            )
              return;
            if (key === 'userName') {
              return (
                <TextField
                  label={'User Name'}
                  helperText="User name will be shown on the leaderboard"
                  onChange={(e) => setUserName(e.target.value)}
                  onClick={() => {}}
                  value={userName}
                  disabled={false}
                  size={'small'}
                />
              );
            } else if (key === 'phoneNumber') {
              return (
                <TextField
                  label={'Phone Number'}
                  helperText="To contact you if you win"
                  value={phoneNumber}
                  type={'tel'}
                  disabled={false}
                  onClick={() => {}}
                  onChange={phoneNumberChangeHandler}
                  size={'small'}
                />
              );
            } else if (key === 'code') {
              return (
                <TextField
                  label={'Race Pass'}
                  value={user[key as keyof typeof user]!}
                  helperText="Race pass found on ticket"
                  onChange={() => {}}
                  disabled={false}
                  onClick={() => {}}
                  size={'small'}
                />
              );
            }
          })}
        </div>
        <GetTos />
      </div>
      {pageState === PAGE_STATE.LOADING ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ClipLoaderSmall />{' '}
        </div>
      ) : (
        <div className="global-player-buttons">
          <span style={{ backgroundColor: 'grey' }} onClick={() => goBack()}>
            Go Back
          </span>
          <span
            onClick={() => {
              if (getDisabled()) return;
              changeRideInfoHandler();
            }}
            className={getDisabled() ? '--disabled' : ''}
          >
            Confirm
          </span>
        </div>
      )}
    </div>
  );
};

const BulletPoint = () => {
  return <div className="bullet-point-container"></div>;
};

const PlayerManage = () => {
  const [racePass, setRacePass] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [user, setUser] = useState<t_user | null>(null);
  const [pageState, setPageState] = useState({
    state: PAGE_STATE.UNKNOWN,
    message: '',
  });
  const racePassChangeHandler = (e: any) => {
    if (e.target.value.length > 5) return;
    if (e.target.value.length == 5) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    setRacePass(e.target.value);
  };
  const getPlayerInfo = () => {
    const onAcceptRide = (response: AxiosResponse) => {
      if (response.status === 202) {
        setUser(response.data.data);
      } else if (response.status === 404) {
        setPageState({
          state: PAGE_STATE.ACCEPTED,
          message: 'No player found',
        });
      } else if (response.status === 409) {
        setPageState({
          state: PAGE_STATE.ACCEPTED,
          message: 'This race pass is already registered contact operator',
        });
      } else {
        setPageState({
          state: PAGE_STATE.REJECTED,
          message: 'Some error occurred try again later',
        });
      }
    };
    const onRejectRide = (e: any) => {
      console.log(e);
      setPageState({
        state: PAGE_STATE.REJECTED,
        message:
          e?.response?.status === 404
            ? 'Player not found'
            : e?.response?.status === 409
            ? 'This race pass is already registered contact operator'
            : 'Some error occurred try again later',
      });
    };
    setPageState({ state: PAGE_STATE.LOADING, message: 'loading' });
    getRide(onAcceptRide, onRejectRide, { code: racePass });
  };

  const clickHandler = () => {
    if (racePass.length != 5) return;
    getPlayerInfo();
  };
  useEffect(() => {
    if (pageState.state === PAGE_STATE.REJECTED) {
      enqueueSnackbar(pageState.message, {
        autoHideDuration: autoHide,
        variant: 'error',
      });
    }
  }, [pageState.state]);
  if (user)
    return (
      <GetPlayerInfo
        goBack={() => {
          setUser(null);
          setPageState({ state: PAGE_STATE.UNKNOWN, message: 'ok' });
        }}
        user={user}
      />
    );
  return (
    <div className="player-management-global-container">
      <div className="--instructions">
        <span
          style={{
            fontSize: '20px',
            fontWeight: '700',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Instructions
        </span>
        <span className="--bullet">
          <BulletPoint />
          Please purchase your tickets from KOS Menu
        </span>
        <span style={{ alignSelf: 'self-start'}}>
          <BulletPoint />
          <span
            style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            Your best lap time will be added on the leaderboard{' '}
            <span style={{ marginLeft: '4px' }}>
              * If there is a penalty 10 seconds will be added to your best time
            </span>
          </span>
        </span>
        <span>
          <BulletPoint />
          Check "WIN" tab to see prizes
        </span>
      </div>
      <TextField
        label=""
        placeHolder="Enter Race Pass"
        onChange={racePassChangeHandler}
        onClick={(e) => racePassChangeHandler(e)}
        type={'tel'}
        value={racePass}
        disabled={false}
        size={'medium'}
        sx={{ width: '300px', fontSize: '18px' }}
      />
      {pageState.state === PAGE_STATE.LOADING ? (
        <ClipLoaderSmall />
      ) : (
        <span
          onClick={clickHandler}
          className={`--btn ${btnDisabled ? '--disabled' : ''}`}
        >
          Activate
        </span>
      )}
    </div>
  );
};

export default PlayerManage;
