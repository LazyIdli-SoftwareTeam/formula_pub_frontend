import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { GrPowerReset } from 'react-icons/gr';

const LeaderboardSearch: React.FC<{
  changeHandler: (value: string) => void;
  value: string;
  resetState: () => void;
}> = ({ changeHandler, value, resetState }) => {
  const [localState, setLocalState] = useState(value);
  return (
    <div className="leaderboard-search-container">
      <TextField
        inputMode="text"
        size="small"
        style={{ width: '100%' }}
        value={localState}
        onChange={(e) => {
          setLocalState(e.target.value);
        }}
        placeholder="Search your name..."
        InputProps={{
          endAdornment: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                paddingLeft: '6px'
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  alignSelf: 'center',
                }}
                onClick={resetState}
              >
                <GrPowerReset />
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  alignSelf: 'center',
                }}
                onClick={() => changeHandler(localState)}
              >
                <IoSearchSharp />
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default LeaderboardSearch;
