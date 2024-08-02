/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
// import HighLightUserScreen from './components/HighLightUserScreen/HighLightUser';
import LeaderboardLayout from './views/LeaderboardTournament/LeaderboardLayout/LeaderboardLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HighlighUserInput from './components/hightLightUserInput/HighLightUserInput';
import { SOCKET_ENDPOINT } from './constants/url_config';
import { io } from 'socket.io-client';
import { SnackbarProvider } from 'notistack';

function App() {
  const [hightLightUser, setHighLightUser] = useState<{
    name: string;
    phoneNumber: string;
    rank: number;
  } | null>(null);
  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('highlightUserRegisterFullScreen', (data) => {
      if (!data.data) return;
      //best score should be choosen
      const user = data.data[0];
      setHighLightUser({
        name: user.userName || '',
        phoneNumber: user.phoneNumber || '',
        rank: 11,
      });
    });
  }, [hightLightUser]);
  const path = window.location.search;
  const pathInspector = new URLSearchParams(path);
  const eventId = pathInspector.get('eventId');
  const branchId = pathInspector.get('branchId');
  if (!eventId || !branchId) {
    return (
      <div>
        <span style={{ color: 'white', fontSize: '30px' }}>
          Event id or branch id is required
        </span>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LeaderboardLayout
              hightLightUser={hightLightUser}
              setHighLightUser={setHighLightUser}
            />
          }
        />
        <Route
          path="/hightLightInput"
          element={
            <SnackbarProvider autoHideDuration={3000}>
              <HighlighUserInput
                highLightUser={hightLightUser}
                setHightLightUser={setHighLightUser}
              />
            </SnackbarProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );

  // return <HighLightUserScreen name="sahil" rank={11} score="1:22:11" />;
}

export default App;
