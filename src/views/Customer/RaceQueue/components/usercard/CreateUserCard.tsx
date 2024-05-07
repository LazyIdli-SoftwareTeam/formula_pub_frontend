import React from 'react';
import './styles.css';
import { queueStates } from '../../../../../types/queue';
import { t_userInfo } from '../../../../../types/userInfo';

const PlayingState = () => {
  return <div className="global-playing-state">Playing</div>;
};

const GoToSiteState = () => {
  return <div className="global-go-to-site-state">Go To Site</div>;
};

const CreateUserCard: React.FC<{
  index: number;
  state: queueStates | '';
  userInfo: t_userInfo;
  loggedIn?: boolean;
  racePass?: string;
}> = ({ index, state, loggedIn = false, userInfo, racePass }) => {
  const RacePassWithStatus: React.FC<{ children: JSX.Element }> = ({
    children,
  }) => {
    return (
      <div
        style={{ display: 'flex', gap: '10px' }}
        className="race-pass-with-status"
      >
        {loggedIn ? <span className="race-pass"> {racePass}</span> : null}
        {children}
      </div>
    );
  };
  const GetState = () => {
    if (state === queueStates.PLAYING) {
      return <RacePassWithStatus children={<PlayingState />} />;
    } else if (state === queueStates.GO_TO_SITE) {
      return <RacePassWithStatus children={<GoToSiteState />} />;
    } else {
      return <RacePassWithStatus children={<span></span>} />;
    }
  };
  return (
    <div className="create-user-card-container">
      <div className="create-user-card-start">
        <span className="--index"> {index + 1} </span>
        <span>|</span>
        <span className="--name">{userInfo.name || userInfo.userName}</span>
      </div>
      <div className="create-state">
        <GetState />
      </div>
    </div>
  );
};

export default CreateUserCard;
