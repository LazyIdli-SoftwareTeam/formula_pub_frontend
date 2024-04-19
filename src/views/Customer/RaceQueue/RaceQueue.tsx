import { queueStates } from '../../../types/queue';
import CreateUserCard from './components/usercard/CreateUserCard';
import './styles/race-queue.css';

const RaceQueue = () => {
  return (
    <div className="race-queue-container">
      <div className="race-queue-container-top-heading">
        <span className="--heading">Race Queue</span>
        <span className="--info">
          Drivers in blue report at the Formula Pub site.
        </span>
      </div>
      <div className="race-queue-box">
        {new Array(20).fill(0).map((_, i) => (
          <CreateUserCard
            index={i}
            loggedIn={i > 10 && i < 14}
            state={
              i > 0 && i < 5
                ? queueStates.PLAYING
                : i > 5 && i < 10
                ? queueStates.GO_TO_SITE
                : ''
            }
            userInfo={{
              name: 'sahil',
              phoneNumber: '7483818329',
              type: 'host',
              raceCode: '23131',
            }}
          
          />
          
        ))}
        
      </div>
    </div>
  );
};

export default RaceQueue;
