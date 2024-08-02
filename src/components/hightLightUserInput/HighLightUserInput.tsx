/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import './styles.css';
import { hightLightFullScreen } from '../../api/scores';
import { AxiosResponse } from 'axios';
import { enqueueSnackbar } from 'notistack';

const HighlighUserInput: React.FC<{
  highLightUser: any;
  setHightLightUser: any;
}> = () => {
  const [option, setOption] = useState('racePass');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [racePass, setRacePass] = useState('');
  const [tournamentPass, setTournamentPass] = useState('');

  const fetchPlayer = () => {
    const onAccept = (response: AxiosResponse) => {
      if (response.status > 200 && response.status < 300) {
        enqueueSnackbar('Highlighted user', { variant: 'success' });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        enqueueSnackbar('Error occurred while highlighting user', {
          variant: 'error',
        });
      }
    };
    const onReject = () => {
      enqueueSnackbar('Error occurred while highlighting user', {
        variant: 'error',
      });
    };
    hightLightFullScreen(onAccept, onReject, {
      type: option == 'racePass' ? 'register' : 'tournament',
      phoneNumber: phoneNumber,
      racePass: racePass,
      tournamentPass: tournamentPass,
    });
  };

  return (
    <div>
      <div className="form-container">
        <h1 className="title">Highlight User</h1>
        <div className="form">
          <div className="input-group">
            <label htmlFor="highlightOption" className="label">
              Highlight By
            </label>
            <select
              id="highlightOption"
              name="highlightOption"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="select"
            >
              <option value="racePass">Race Pass</option>
              <option value="tournament">Tournament</option>
            </select>
          </div>

          {option === 'racePass' && (
            <>
              <div className="input-group">
                <label htmlFor="racePass" className="label">
                  Race Pass
                </label>
                <input
                  value={racePass}
                  onChange={(e) => setRacePass(e.target.value)}
                  type="text"
                  name="racePass"
                />
              </div>
            </>
          )}

          {option === 'tournament' && (
            <>
              <div className="input-group">
                <label htmlFor="tournamentId" className="label">
                  Tournament ID
                </label>
                <input
                  value={tournamentPass}
                  onChange={(e) => setTournamentPass(e.target.value)}
                  type="text"
                  name="tournamentId"
                />
              </div>
              <div className="separator">or</div>
              <div className="input-group">
                <label htmlFor="phoneNumber" className="label">
                  Phone Number
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  name="phoneNumber"
                />
              </div>
            </>
          )}

          <button
            onClick={() => {
              fetchPlayer();
            }}
            className="submit-button"
          >
            Highlight
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighlighUserInput;
