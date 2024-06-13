/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
// import Prizes from './components/prize/Prizes';
import './styles/leaderboard.css';
import LeaderboardHeader from './components/leaderboardHeader/LeaderboardHeader';
import LeaderboardUsers from './components/leaderboardUsers/LeaderboardUsers';
import ScoreVerification from '../../../components/ScoreVerification/ScoreVerification';
import { PAGE_STATE } from '../BuyPass/Home';
import { getScores } from '../../../api/lb';
import { AxiosResponse } from 'axios';
import { ClipLoaderSmall } from '../../../components/loader/CustomLoader';
import { t_userInfo } from '../../../types/userInfo';
import { SOCKET_ENDPOINT } from '../../../constants/url_config';
import { io } from 'socket.io-client';
import LeaderboardSearch from './components/leaderboardFilters/Search';
import LeaderboardFilters from './components/leaderboardFilters/Filters';

export enum HEADER_STATE {
  TODAY = 'FASTEST OF TODAY',
  LEADERBOARD = 'LEADERBOARD',
}

const TABS = [HEADER_STATE.TODAY, HEADER_STATE.LEADERBOARD];
const Leaderboard = () => {
  const [headerTab, setHeaderTab] = useState<number>(0);
  const [requestState, setRequestState] = useState(PAGE_STATE.UNKNOWN);
  const [scoreVerifyPopup, setScoreVerifyPopup] = useState(false);

  const [scores, setScores] = useState<{ player: t_userInfo; score: string }[]>(
    []
  );
  const [searchName, setSearchName] = useState('');
  const [sort, setSort] = useState('all');

  const changeName = (value: string) => {
    setSearchName(value);
  };
  const changeSort = (value: string) => {
    setSort(value);
  };
  const resetState = () => {
    setSearchName('');
  };

  const LeaderboardFiltersWrapper = () => {
    return (
      <div className="leaderboard-filters-wrapper-container">
        <div style={headerTab == 0 ? { width: '100%' } : { width: '65%' }}>
          <LeaderboardSearch
            resetState={resetState}
            changeHandler={changeName}
            value={searchName}
          />
        </div>
        {headerTab === 0 ? null : (
          <div style={{ width: '35%' }}>
            <LeaderboardFilters changeHandler={changeSort} value={sort} />
          </div>
        )}
      </div>
    );
  };
  // const [click, setClick] = useState(false);
  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('score', (data) => {
      console.log(data);
      const newScores = data.map((score: any) => {
        return { player: score.code, score: score.score };
      });
      setScores(newScores);
    });
    return () => {
      socket.off('score');
      socket.disconnect();
    };
  }, [scores]);

  useEffect(() => {
    if (searchName.length > 2) {
      const nwScores = [];
      for (const score of scores) {
        if (!score.player || !score.player.userName) continue;
        if (score.player.userName.startsWith(searchName)) {
          nwScores.push(score);
        }
      }
      setScores(nwScores);
    } else {
      fetchScores();
    }
  }, [searchName]);
  const fetchScores = () => {
    setRequestState(PAGE_STATE.LOADING);
    const onAcceptGetScores = (response: AxiosResponse) => {
      if (response.status === 202) {
        setRequestState(PAGE_STATE.ACCEPTED);
        const newScores = response.data.data.map((score: any) => {
          return { player: score.code, score: score.score };
        });
        setScores(newScores);
      } else {
        setRequestState(PAGE_STATE.ACCEPTED);
      }
    };
    const onRejectGetScores = (error: any) => {
      console.log(error);
      setRequestState(PAGE_STATE.REJECTED);
    };
    getScores(onAcceptGetScores, onRejectGetScores, {
      scoreFilter: headerTab === 0 ? 'today' : '',
      sort: sort,
    });
  };

  useEffect(() => {
    fetchScores();
  }, [headerTab, sort]);

  const updateTab = (index: number) => {
    setHeaderTab(index);
  };
  // const showVerifyPopup = () => {
  //   setScoreVerifyPopup(true);
  // };
  const closeVerifyPopup = () => {
    setScoreVerifyPopup(false);
  };

  if (requestState === PAGE_STATE.REJECTED)
    return <span>Some error occurred try again later</span>;
  return (
    <div className="customer-leader-board-container">
      {scoreVerifyPopup ? (
        <ScoreVerification closePopup={closeVerifyPopup} />
      ) : null}
      <div className="customer-leader-board-top">
        {/* <Prizes click={click} setClick={setClick} /> */}
        <LeaderboardHeader
          activeTabIndex={headerTab}
          tabs={TABS}
          updateTab={updateTab}
        />
        <LeaderboardFiltersWrapper />
      </div>

      <div className="customer-leader-board-users">
        {requestState === PAGE_STATE.LOADING ? (
          <div
            style={{
              height: '60dvh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ClipLoaderSmall />
          </div>
        ) : (
          <LeaderboardUsers
            // showScoreVerifyPopup={showVerifyPopup}
            scores={scores}
          />
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
