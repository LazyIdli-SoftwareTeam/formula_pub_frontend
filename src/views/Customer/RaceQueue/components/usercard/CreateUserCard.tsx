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
}> = ({ index, state, loggedIn = false, userInfo }) => {
  const RacePassWithStatus: React.FC<{ children: JSX.Element }> = ({
    children,
  }) => {
    return (
      <div className="race-pass-with-status">
        {loggedIn ? <span className="race-pass"> 3 3 3 3 3</span> : null}
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
    <div>
    <div className="create-user-card-container">
      <div className="create-user-card-start">
        <span className="--index"> {index + 1}  </span>
        <span>|</span>
        <span className="--name">{userInfo.name}</span>
      </div>
      <div className="create-state">
        <GetState />
      </div>
    </div>
   <hr className='create-user-line'/>
    </div>
  );
};

export default CreateUserCard;
