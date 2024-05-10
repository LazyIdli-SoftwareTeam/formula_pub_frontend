/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import {
  LeaderboardKioskHeader,
  LeaderboardkioskMainpage,
} from './views/LeaderboardKiosk/components/HeaderKiosk/LeaderboardKioskHeader';
import { io } from 'socket.io-client';
import {  SOCKET_ENDPOINT } from './constants/url_config';
function App() {
  const path = window.location.search;
  console.log(path);
  const [queue, setQueue] = useState(false);
  const [heading, setHeading] = useState('LEADERBOARD');
  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connected');
    })
    socket.on('dSwitch', (data) => {
      console.log(data); 
      if (data === 'queue') {
        setQueue(!queue);
      } else if (data === 'daily') {
        setHeading('FASTEST OF TODAY');
        setQueue(false);
      } else if (data === 'monthly') {
        setHeading('LEADERBOARD');
        setQueue(false);
      }
    });
    return () => {
      socket.off('switch');
      socket.disconnect();
    };
  }, [heading, queue]);
  const pathInspector = new URLSearchParams(path);
  const eventId = pathInspector.get('eventId');
  const branchId = pathInspector.get('branchId');
  console.log(branchId);
  console.log(eventId);
  if (!eventId || !branchId) {
    return (
      <div>
        <span style={{ color: 'white', fontSize: '30px' }}>
          Event id or branch id is required
        </span>
      </div>
    );
  }
  if (queue) {
    return <LeaderboardKioskHeader />;
  }
  return <LeaderboardkioskMainpage heading={heading} />;

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/lb-race-queue" element={<LeaderboardKioskHeader />} />
  //         <Route path="/lb" element={<LeaderboardkioskMainpage />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // );
}

export default App;
