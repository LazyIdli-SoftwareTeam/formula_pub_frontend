/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LeaderBoardFastestScore.css';

import { t_userInfoKiosk } from '../../../../types/userinfoKiosk';
import { SOCKET_ENDPOINT } from '../../../../constants/url_config';
import { io } from 'socket.io-client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
// const initialUsers: t_userInfoKiosk[] = new Array(20).fill(0).map((_, i) => ({
//   name: 'Sahil' + (i + 1),
//   phoneNumber: '',
//   type: '',
//   raceCode: '',
//   animation: false,
// }));

const kioskStylesRank = (index: number) => {
  if (index === 1) {
    return {
      index: {
        color: '#D2A73EE5',

        background: 'var(--Teho-Black, #181818)',
      },
      name: {
        color: '#181818',
      },
      root: {
        background:
          'linear-gradient(90deg, rgba(184, 133, 27, 0.9) 0%, rgba(210, 167, 62, 0.9) 8.33%, rgba(214, 171, 66, 0.9) 17.19%, rgba(248, 221, 123, 0.9) 31.25%, rgba(253, 237, 153, 0.9) 48.96%, rgba(251, 234, 146, 0.9) 66.15%, rgba(243, 215, 115, 0.9) 82.29%, rgba(226, 189, 86, 0.9) 91.67%, rgba(181, 128, 23, 0.9) 100%)',
      },
    };
  } else if (index === 2) {
    return {
      index: {
        color: '#D2D2D2',
        background: 'var(--Teho-Black, #181818)',
      },
      name: {
        color: '#181818',
      },
      root: {
        background:
          'linear-gradient(90deg, #565656 0%, #D2D2D2 0%, #989898 9.67%, #FFFFFF 69.66%, #C0C0C0 82.12%, #757575 100%)',
      },
    };
  } else if (index == 3) {
    return {
      index: {
        color: '#A1522C',
        background: 'var(--Teho-Black, #181818)',
      },
      root: {
        background:
          'linear-gradient(90deg, #A1522C 0%, #7D3E1C 4.61%, #C76D41 17.85%, #A4512B 48.49%, #F2B192 67.69%, #E37F49 72.66%, #BD663D 87.48%, #954D2A 94.2%, #A5552F 100%)',
      },
    };
  } else if (index > 10) {
    return {
      root: {
        background:
          'linear-gradient(98.39deg, #000000 6.42%, rgba(0, 0, 0, 0.5) 93.58%)',

        border:
          'radial-gradient(107.33% 5722.83% at 21.14% 32.5%, #1C98B9 0%, #136C83 100%)',
      },
    };
  } else {
    return { index: {}, root: {} };
  }
};

// const CustomPrevArrow = () => {
//   return <></>;
// };

// const CustomNextArrow = () => {
//   return <></>;
// };

export const LeaderboardKioskFastestHeader: React.FC<{
  users: any;
  setUsers: any;
  heading: string;
}> = ({ users, heading }) => {
  const [recentEntry, setRecentEntry] = useState();

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <CustomNextArrow />,
  //   prevArrow: <CustomPrevArrow />,
  // };

  // const images = [
  //   '/src/assets/images/Frame 1233.png',
  //   '/src/assets/images/newcover1.png',
  //   '/src/assets/images/newcover2.png',
  //   '/src/assets/images/newcover3.png',
  //   '/src/assets/images/back3.png',
  // ];

  const ImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socket = io(SOCKET_ENDPOINT);
    socket.connect();
    socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('addScore', (data) => {
      console.log(data);
      setRecentEntry(data);

      //   const users: any[] = [...users];
      //   setUsers();
    });
    return () => {
      socket.off('addScore');
      socket.disconnect();
    };
  }, [recentEntry]);
  useEffect(() => {
    if (ImageRef.current) {
      const LeaderHeight = `${ImageRef.current.clientHeight + 340}`;
      const getElement = document.getElementById('new-card-height');
      if (getElement) {
        getElement.style.height = `calc(100dvh - ${LeaderHeight}px)`;
      }
    }
  }, [ImageRef]);

  return (
    <>
      <div className="main-leaderboard-card" id="new-card-height">
        <div className="leader-board-race-fast-card">
          <div className="leader-board-race-fsat-card-image">
            <div className="leader-board-fastest-header">
              <div className="race-queue-rank">
                <span className="kiosk-index-icon"> {/* <FaTrophy /> */}</span>
                <span className="race-queue-fast-name">NAME</span>
              </div>
              <div>
                <span className="race-queue-fast-time  race-queue-rank">
                  {/* <TimeButton  /> */}
                  <span> TIME</span>
                </span>
              </div>
            </div>
            <LeaderboardKioskUsers
              users={users}
              recentEntry={recentEntry}
              heading={heading}
            />
          </div>
        </div>
      </div>
      {/* <RecentEntryKiosk user={recentEntry || {}} /> */}
      <div>
        {/* <Slider {...settings}>
          {images.map((imageUrl, index) => ( */}
        <div key={1} className="images-animations" ref={ImageRef}>
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 10000,
              // delay: 1000,
            }}
            modules={[Autoplay]}
            slidesPerView={1}
            defaultValue={0}
            style={{ height: '100%', width: '100%' }}
          >
            <SwiperSlide>
              <img
                className="image-slide"
                src={'/scan.png'}
                alt={`Slide ${1}`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="image-slide"  src={'/2.png'} alt={`Slide ${2}`} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="image-slide" src={'/3.png'} alt={`Slide ${1}`} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="image-slide" src={'/4.png'} alt={`Slide ${1}`} />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* ))} */}
        {/* </Slider> */}
      </div>
      <LeaderboardKioskFooter />
    </>
  );
};

const LeaderboardKioskUsers: React.FC<{
  users: any[];
  recentEntry: any;
  heading: string;
}> = ({ users, recentEntry, heading }) => {
  const [displayedUsers, setDisplayedUsers] =
    useState<t_userInfoKiosk[]>(users);
  const newEntryRef = useRef<HTMLDivElement>(null);
  // const total = 5000;
  const prize = '';
  const getPrizes = (index: number) => {
    if (heading === 'FASTEST OF TODAY' && index === 0) {
      return prize;
    } else {
      if (index === 0 && heading != 'FASTEST OF TODAY') {
        return prize;
      } else if (index === 1 && heading != 'FASTEST OF TODAY') {
        return prize;
      } else if (index === 2 && heading != 'FASTEST OF TODAY') {
        return prize;
      } else {
        return '';
      }
    }
  };

  useEffect(() => {
    if (!recentEntry) return;
    console.log('recent  entry', recentEntry);
    addNewCard(
      recentEntry.index,
      recentEntry.newScore.code,
      recentEntry.newScore.score
    );
  }, [recentEntry]);
  const addNewCard = (index: number, user: any, score: string) => {
    console.log('index in add card', index);
    const updatedUsers: any = [...displayedUsers];

    updatedUsers.splice(index, 0, {
      userName: user.userName,
      phoneNumber: '1234567890',
      type: 'participant',
      raceCode: '12345',
      score: score,
      animation: true,
    });
    const updatedUsersWithAnimation = updatedUsers.map(
      (user: any, i: number) => ({
        ...user,
        animation: i === index ? true : false,
      })
    );

    setDisplayedUsers(updatedUsersWithAnimation);
    console.log('updatedUsersWithAnimation', updatedUsersWithAnimation);

    if (newEntryRef.current) {
      if (index > displayedUsers.length) {
        setTimeout(() => {
          if (!newEntryRef.current) return;
          const newcardRef = newEntryRef.current.children.length - 1;
          console.log(newcardRef);
          const newof: any = newEntryRef.current.children[newcardRef];
          if (!newof) return;
          console.log(newof);

          newof.scrollIntoView({ behavior: 'smooth' });
          const animationDelay = 1000;
          newof.className = 'animated-new-card';
          if (newof.style) {
            newof.style.animationDelay = animationDelay + 'ms';
          }
        }, 1000);
      } else {
        const cardHeight =
          newEntryRef.current.scrollHeight / displayedUsers.length;
        const cardMiddle =
          index * cardHeight - newEntryRef.current.clientHeight / 2;
        newEntryRef.current.scrollTo({
          top: cardMiddle,
          behavior: 'smooth',
        });
      }
    }
  };

  const changeScore = (score: string) => {
    const newScore = score.split(':');
    return `${newScore[0]}:${newScore[1]}.${newScore[2]}`;
  };

  return (
    <>
      <div ref={newEntryRef} className="leaderboard-scroll">
        {displayedUsers.map((user: any, i) => {
          console.log(user);
          return (
            <React.Fragment key={i}>
              <LeaderboardKioskCard
                index={i + 1}
                key={i}
                score={changeScore(user.score)}
                userName={user ? user.userName : ''}
                prizeMoney={getPrizes(i).toString()}
                animation={user.animation}
                background={false}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export const LeaderboardKioskCard: React.FC<{
  index: number;
  userName: string;
  prizeMoney?: string;
  score: string;
  animation: boolean;
  background: boolean;
}> = ({ index, userName, score, prizeMoney, animation, background }) => {
  const kioskStyles = kioskStylesRank(index);

  return (
    <div
      className={`kiosk-card-main-dis ${animation ? 'animated-new-card' : ''} `}
    >
      <div
        className={`kiosk-card ${background ? 'background-recent' : ''}`}
        style={kioskStyles.root}
      >
        <div className="kios-index-username">
          <span className="kiosk-index" style={kioskStyles.index}>
            {index}
          </span>
          <span className="kiosk-username" style={kioskStyles.name}>
            {userName}
          </span>
        </div>

        <div className="kiosk-prize-money-score">
          {prizeMoney && (
            <span className="kiosk-prize-money" style={kioskStyles.name}>
              {prizeMoney}
            </span>
          )}
          <span style={kioskStyles.name} className="kiosk-score">
            {score}
          </span>
        </div>
      </div>
    </div>
  );
};

export const RecentEntryKiosk: React.FC<{ user: any }> = ({ user }) => {
  return (
    <div className="leader-board-kiosk-recent-entry">
      <p className="leader-board-kiosk-recent-heading">RECENT ENTRY</p>
      <div className="">
        <LeaderboardKioskCard
          index={11}
          score={user.score}
          userName={user.userName}
          animation={false}
          background
        />
      </div>
    </div>
  );
};

export const LeaderboardKioskFooter = () => {
  return (
    <div className="leader-board-footer-card">
      <div
        style={{
          fontSize: '25px',
          alignSelf: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
        className="footer-text-kiosk scroll-text"
      >
        Get your name on leaderboard win exciting prizes!
      </div>
    </div>
  );
};
