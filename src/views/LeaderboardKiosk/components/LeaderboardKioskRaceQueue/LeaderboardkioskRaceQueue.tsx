/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
// import { t_userInfo } from '../../../../types/userInfo';
import { useEffect, useState } from 'react';
import { PAGE_STATE } from '../HeaderKiosk/LeaderboardKioskHeader';
import { AxiosResponse } from 'axios';
import { getQueue } from '../../../../api/queue';
import { FullScreenLoader } from '../../../../components/loader/CustomLoader';
import { io } from 'socket.io-client';
import { SOCKET_ENDPOINT } from '../../../../constants/url_config';

const kioskRaceQueuStyles = (index: number) => {
  if (index <= 4) {
    return {
      index: {
        background: 'var(--Tehe-Blue, #1CB1D9)',
        color: '#F4F4F4',
      },
      root: {
        boxShadow: '0px 0px 8px 0px #1CB1D9CC',
      },
      button: {
        padding: '10px 16px 10px 16px',
      },
    };
  }
  if (index <= 9) {
    return {
      element: {
        padding: '4px 9px 4px 9px',
      },
    };
  } else {
    return { index: {}, root: {} };
  }
};

export const LeaderboardKioskRaceCard: React.FC<{
  index: number;
  userName: string;
  site?: string;
  users: any[]
}> = ({ index, userName, site, users }) => {
  const kioskRace = kioskRaceQueuStyles(index);
  return (
    <>
      <div className="main-card-in-race-queue">
        <div className="kiosk-race-card-queue-main" style={kioskRace.root}>
          <div className="">
            <span className="kiosk-race-queue-index" style={kioskRace.index}>
              {index}
            </span>
            <span className="kiosk-race-queue-username">{userName}</span>
          </div>
          <span className="kiosk-go-to-site" style={kioskRace.button}>
            {site}
          </span>
        </div>
      </div>
      { index === users.length ? null: <hr className="horizonatl-race-queue" />}
    </>
  );
};

export const LeaderboardKioskRaceUsers: React.FC<{ users: any[] }> = ({
  users,
}) => {
  return (
    <div className="">
      <p className="race-queue-kiosk-name">NAME</p>
      {users.map((user, i) => (
        <LeaderboardKioskRaceCard
          users={users}
          index={i + 1}
          key={i}
          site={i < 4 ? 'Go to site' : ' '}
          userName={user.userName}
        />
      ))}
    </div>
  );
};

export const RaceQueueFooter = () => {
  return (
    <div className="footer-race-queue-last">
      <span className="footer-race-queue-head">
        PLAYERS IN BLUE, PLEASE REPORT AT THE RACE AREA
      </span>
    </div>
  );
};

export const LeaderboardKioskRaceQueue = () => {
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('queue', (data) => {
      console.log(data);
      const users: any[] = [];
      for (const el of data) {
        if (el.status === 'completed') continue;
        users.push({ ...el.code, state: el.status });
      }

      setUsers(users);

      //   const users: any[] = [...users];
      //   setUsers();
    });
    return () => {
      socket.off('queue');
      socket.disconnect();
    };
  }, [users]);
  useEffect(() => {
    const onGetQueueAccepted = (response: AxiosResponse) => {
      if (response.status === 202) {
        setPageState(PAGE_STATE.ACCEPTED);
        const users: any[] = [];
        for (const el of response.data.data) {
          if (el.status === 'completed') continue;
          users.push({ ...el.code, state: el.status });
        }

        setUsers(users);
      } else {
        alert(response.status);
        setPageState(PAGE_STATE.REJECTED);
      }
    };
    const onGetQueueRejected = (error: any) => {
      console.log(error);
      setPageState(PAGE_STATE.REJECTED);
    };
    getQueue(onGetQueueAccepted, onGetQueueRejected);
    setPageState(PAGE_STATE.LOADING);
  }, []);

  if (pageState === PAGE_STATE.LOADING) return <FullScreenLoader />;
  return (
    <div>
      <div className="leader-board-race-queue-heading">
        <p className="race-queue-heading">RACE QUEUE</p>
      </div>
      <div className="leader-kiosk-race-queue-size">
        <LeaderboardKioskRaceUsers
          users={users}
        />
      </div>
      <RaceQueueFooter />
    </div>
  );
};
