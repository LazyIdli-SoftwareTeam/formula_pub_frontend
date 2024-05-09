/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { queueStates } from '../../../types/queue';
import CreateUserCard from './components/usercard/CreateUserCard';
import './styles/race-queue.css';
import { PAGE_STATE } from '../BuyPass/Home';
import { AxiosResponse } from 'axios';
import { getQueue } from '../../../api/queue';
import { FullScreenLoader } from '../../../components/loader/CustomLoader';

const RaceQueue = () => {
  const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
  const [users, setUsers] = useState<any>([]);
  const orderInfo = localStorage.getItem('order');
  const [playerInfo, setPlayerInfo] = useState<any>([]);

  useEffect(() => {
    console.log('playerInfo', playerInfo);
  }, [playerInfo, users])

  useEffect(() => {
    const onGetQueueAccepted = (response: AxiosResponse) => {
      if (response.status === 202) {
        console.log(response);
        setPageState(PAGE_STATE.ACCEPTED);
        const users: any[] = [];
        for (const el of response.data.data) {
          if (el.status === 'completed') continue; 
          users.push({ ...el.code, state: el.status });
        }
        if (orderInfo) {
          const tempPlayerInfo: any  = []; 
          const orders = JSON.parse(orderInfo); 
          for (const order of orders) { 
            if (!order || !order.players) continue; 
            for (const player of order.players)  tempPlayerInfo.push(player); 
          }
          setPlayerInfo(tempPlayerInfo);
        }
        setUsers(users);
      } else {
        setPageState(PAGE_STATE.ACCEPTED);
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
  if (pageState === PAGE_STATE.REJECTED)
    return <span>Error occurred while loading queue try again later</span>;

  return (
    <div className="race-queue-container">
      <div className="race-queue-container-top-heading">
        <span className="--heading">Race Queue</span>
        <span className="--info">
          Drivers in blue report at the Formula Pub site.
        </span>
      </div>
      <div className="race-queue-box">
        {users.map((user: any, i: number) => {
          console.log(user);
          const index = playerInfo.findIndex((playerinfo: any) => playerinfo._id === user._id); 
          return <CreateUserCard
            index={i}
            loggedIn={index >=  0}
            racePass={index >= 0 ? playerInfo[index].code : undefined}
            state={
              user.state === 'playing'
                ? queueStates.PLAYING
                : i >= 0 && i <= 4 
                ? queueStates.GO_TO_SITE
                : ''
            }
            userInfo={user}
          />
        })}
      </div>
    </div>
  );
};

export default RaceQueue;
