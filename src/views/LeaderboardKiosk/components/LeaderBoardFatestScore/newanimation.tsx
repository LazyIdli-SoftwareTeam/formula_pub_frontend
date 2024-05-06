/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";

import { FaTrophy } from "react-icons/fa6";
import "./LeaderBoardFastestScore.css";

import { t_userInfoKiosk } from "../../../../types/userinfoKiosk";
import { TimeButton } from "../../../../components/GlobalBuyHelpButtoons/timebutton";

const initialUsers: t_userInfoKiosk[] = new Array(20).fill(0).map((_, i) => ({
  name: "Sahil" + (i + 1),
  phoneNumber: "",
  type: "",
  raceCode: "",
  animation: false,
}));

const kioskStylesRank = (index: number) => {
  if (index === 1) {
    return {
      index: {
        color: "#D2A73EE5",

        background: "var(--Teho-Black, #181818)",
      },
      name: {
        color: "#181818",
      },
      root: {
        background:
          "linear-gradient(90deg, rgba(184, 133, 27, 0.9) 0%, rgba(210, 167, 62, 0.9) 8.33%, rgba(214, 171, 66, 0.9) 17.19%, rgba(248, 221, 123, 0.9) 31.25%, rgba(253, 237, 153, 0.9) 48.96%, rgba(251, 234, 146, 0.9) 66.15%, rgba(243, 215, 115, 0.9) 82.29%, rgba(226, 189, 86, 0.9) 91.67%, rgba(181, 128, 23, 0.9) 100%)",
      },
    };
  } else if (index === 2) {
    return {
      index: {
        color: "#D2D2D2",
        background: "var(--Teho-Black, #181818)",
      },
      name: {
        color: "#181818",
      },
      root: {
        background:
          "linear-gradient(90deg, #565656 0%, #D2D2D2 0%, #989898 9.67%, #FFFFFF 69.66%, #C0C0C0 82.12%, #757575 100%)",
      },
    };
  } else if (index == 3) {
    return {
      index: {
        color: "#A1522C",
        background: "var(--Teho-Black, #181818)",
      },
      root: {
        background:
          "linear-gradient(90deg, #A1522C 0%, #7D3E1C 4.61%, #C76D41 17.85%, #A4512B 48.49%, #F2B192 67.69%, #E37F49 72.66%, #BD663D 87.48%, #954D2A 94.2%, #A5552F 100%)",
      },
    };
  } else if (index > 10) {
    return {
      root: {
        background:
          "linear-gradient(98.39deg, #000000 6.42%, rgba(0, 0, 0, 0.5) 93.58%)",

        border:
          "radial-gradient(107.33% 5722.83% at 21.14% 32.5%, #1C98B9 0%, #136C83 100%)",
      },
    };
  } else {
    return { index: {}, root: {} };
  }
};

export const LeaderboardKioskFastestHeader = () => {
  const ImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ImageRef.current) {
      const LeaderHeight = `${ImageRef.current.clientHeight + 260}`;
      console.log(ImageRef.current.clientHeight);

      const getElement = document.getElementById("new-card-height");
      //const getElement = document.querySelectorAll('.kiosk-card-main-dis')
      //getElement.style['height'] =  LeaderHeight;
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
                <span className="kiosk-index-icon">
                  {" "}
                  <FaTrophy />
                </span>
                <span className="race-queue-fast-name">NAME</span>
              </div>
              <div>
                <span className="race-queue-fast-time  race-queue-rank">
                  <TimeButton />
                  <span> TIME</span>
                </span>
              </div>
            </div>
            <LeaderboardKioskUsers users={initialUsers} />;
          </div>
        </div>
      </div>
      <RecentEntryKiosk />
      <div className="images-animations" ref={ImageRef}>
        <img
          src="/src/assets/images/Frame 1233.png"
          className="leaderboar-kiosk-background-image image"
        />
        <img
          src="/src/assets/images/banner-image.png"
          className="leaderboar-kiosk-background-image image"
        />

      </div>
      <LeaderboardKioskFooter />
    </>
  );
};

const LeaderboardKioskUsers: React.FC<{ users: t_userInfoKiosk[] }> = ({
  users,
}) => {
  const [displayedUsers, setDisplayedUsers] =
    useState<t_userInfoKiosk[]>(users);
  const newEntryRef = useRef<HTMLDivElement>(null);

  const addNewCard = () => {
    const indexInput = prompt(
      "Enter the index to add new card (1 to " + displayedUsers.length + "):"
    );
    if (indexInput) {
      const index = parseInt(indexInput, 10);
      if (!isNaN(index) && index >= 1 && index <= displayedUsers.length + 2) {
        const updatedUsers = [...displayedUsers];
        updatedUsers.splice(index - 1, 0, {
          name: "Priyanka",
          phoneNumber: "1234567890",
          type: "participant",
          raceCode: "12345",
          animation: true,
        });

        const updatedUsersWithAnimation = updatedUsers.map((user, i) => ({
          ...user,
          animation: i === index - 1 ? true : false,
        }));

        setDisplayedUsers(updatedUsersWithAnimation);

        if (newEntryRef.current) {
          if (index >= displayedUsers.length) {
            newEntryRef.current.scrollTo({
              top: newEntryRef.current.scrollHeight+90,
              behavior: "smooth",
            });
          } else {
            const cardHeight =
              newEntryRef.current.scrollHeight / displayedUsers.length;
            const cardMiddle =
              index * cardHeight - newEntryRef.current.clientHeight / 2;
            newEntryRef.current.scrollTo({
              top: cardMiddle,
              behavior: "smooth",
            });
          }
        }

        /*if (newEntryRef.current) {
            const cards = Array.from(newEntryRef.current.children);
            cards.forEach((card, i) => {
              if (i >= index) {
                const delay = (i - index + 1) * 100; 
                card.style.animationDelay = `${delay}ms`;
                card.classList.add('animated-card');
              }
            });
          }
          */
        /*if (newEntryRef.current) {
            const cardHeight = newEntryRef.current.scrollHeight / displayedUsers.length;
            let cardMiddle;
            if (index > displayedUsers.length) { // Check if the new card is one of the last 5 indexes
              const containerHeight = newEntryRef.current.clientHeight;
              const cardHeight = newEntryRef.current.scrollHeight / displayedUsers.length;
              cardMiddle = (index - 1) * cardHeight - containerHeight / 2 + cardHeight / 2;
            } else {
              cardMiddle = index * cardHeight - newEntryRef.current.clientHeight / 2;
            }
            newEntryRef.current.scrollTo({ top: cardMiddle, behavior: 'smooth' });
          }
          */

        /*
          
          */
      } else {
        alert(
          "Invalid index. Please enter a number between 1 and " +
            displayedUsers.length
        );
      }
    }
  };

  return (
    <>
      {
        <button style={{ position: "absolute", top: 0 }} onClick={addNewCard}>
          Add
        </button>
      }
      <div ref={newEntryRef} className="leaderboard-scroll">
        {displayedUsers.map((user, i) => (
          <React.Fragment key={i}>
            <LeaderboardKioskCard
              index={i + 1}
              key={i}
              score={user ? "00:56:23" : ""}
              userName={user ? user.name : ""}
              prizeMoney={i < 3 ? "₹50000" : ""}
              animation={user.animation}
              background={false}
            />
          </React.Fragment>
        ))}
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
      className={`kiosk-card-main-dis ${animation ? "animated-new-card" : ""} `}
    >
      <div
        className={`kiosk-card ${background ? "background-recent" : ""}`}
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
          <span className="kiosk-score">{score}</span>
        </div>
      </div>
    </div>
  );
};

export const RecentEntryKiosk = () => {
  return (
    <div className="leader-board-kiosk-recent-entry">
      <p className="leader-board-kiosk-recent-heading">RECENT ENTRY</p>
      <div className="">
        {new Array(1).fill(0).map((_, i) => (
          <LeaderboardKioskCard
            index={11}
            key={i}
            score="00.56.23"
            userName={"Priya"}
            animation={false}
            background={true}
          />
        ))}
      </div>
    </div>
  );
};

export const LeaderboardKioskFooter = () => {
  return (
    <div className="leader-board-footer-card">
      <div className="footer-text-kiosk scroll-text">
        Footer: Disclaimers/ Announcements/ etc
      </div>
    </div>
  );
};
