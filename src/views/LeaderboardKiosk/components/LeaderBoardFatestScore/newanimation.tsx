/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LeaderBoardFastestScore.css';

import { t_userInfoKiosk } from '../../../../types/userinfoKiosk';
// import { SOCKET_ENDPOINT } from "../../../../constants/url_config";
import { io } from 'socket.io-client';
import TopPlayers from '../../../../components/TopPlayers/TopPlayers';

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

export const LeaderboardKioskFastestHeader: React.FC<{
	users: any;
	setUsers: any;
}> = ({ users, setUsers }) => {
	const [recentEntry, setRecentEntry] = useState();

	/*const images = [
    '/src/assets/images/Frame 1233.png',
    '/src/assets/images/newcover1.png',
   '/src/assets/images/newcover2.png',
    '/src/assets/images/newcover3.png',
     '/src/assets/images/back3.png',
   ];
*/
	const ImageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const socket = io('http://localhost:8000/', {
			transports: ['websocket', 'polling'], // Ensure WebSockets are used
		});
		socket.connect();
		socket.on('connect', () => {
			console.log('connect');
		});
		socket.on('addScore', (data) => {
			console.log('new score data has come here', data);
			setRecentEntry(data);

			//   const users: any[] = [...users];
			//   setUsers();
		});
		socket.on('editScore', (data) => {
			if (!data.score || !data.scoreId) return;
			console.log(data);
			const d = [...users];
			console.log(d);
			const i = d.findIndex((el) => el.scoreId === data.scoreId);
			if (i >= 0) {
				d[i] = { ...d[i], score: data.score };
			}
			setUsers(d);
		});
		socket.on('editTag', (data) => {
			console.log(data);
			if (!data.gamerTag || !data.userId) return;
			const d = [...users];
			const i = d.findIndex((el) => el.userId === data.userId);
			console.log('gound her e', i);
			if (i >= 0) {
				d[i] = { ...d[i], gamerTag: data.gamerTag };
			}
			console.log(d[i]);
			setUsers(() => d);
		});
		return () => {
			socket.off('addScore');
			socket.disconnect();
		};
	}, [users]); 

	useEffect(() => {
		if (ImageRef.current) {
			// const LeaderHeight = `${ImageRef.current.clientHeight}`;
			const getElement = document.getElementById('new-card-height');
			if (getElement) {
				getElement.style.height = `calc(100dvh - 200px)`;
			}
		}
	}, [ImageRef]);

	return (
		<>
			<div
				className="main-leaderboard-card"
				id="new-card-height"
			>
				<div>
					<TopPlayers />
				</div>
				<div className="leader-board-race-fast-card">
					<div className="leader-board-race-fsat-card-image">
						<div className="leader-board-fastest-header">
							<div className="race-queue-rank">
								<span className="kiosk-index-icon"> {/* <FaTrophy /> */}</span>
								<span className="race-queue-fast-name">NAME</span>
							</div>
							<div>
								<span
									style={{ paddingRight: '20px' }}
									className="race-queue-fast-time  race-queue-rank"
								>
									{/* <TimeButton  /> */}
									<span> SCORE</span>
								</span>
							</div>
						</div>
						<LeaderboardKioskUsers
							users={users}
							recentEntry={recentEntry}
						/>
					</div>
				</div>
				<div className="leaderboard-bottom-section-image">
					<img src="loco-img.svg" />
				</div>
			</div>

			{/* <RecentEntryKiosk user={recentEntry || {}} /> */}
			{/* <div>
        <div className="images-animations" ref={ImageRef}>
          <img
            src="/src/assets/images/Frame 1233.png"
            className="image-slide "
          />
          <img
            src="/src/assets/images/newcover1.png"
            className="image-slide image"
          />
          <img
            src="/src/assets/images/newcover2.png"
            className="image-slide image"
          />
          <img
            src="/src/assets/images/newcover3.png"
            className="image-slide image"
          />
          <img
            src="/src/assets/images/back3.png"
            className="image-slide image"
          />
        </div>
      </div> */}
			<LeaderboardKioskFooter />
		</>
	);
};

const LeaderboardKioskUsers: React.FC<{ users: any[]; recentEntry: any }> = ({
	users,
	recentEntry,
}) => {
	const [displayedUsers, setDisplayedUsers] =
		useState<t_userInfoKiosk[]>(users);
	const newEntryRef = useRef<HTMLDivElement>(null);
	const total = 5000;
	const getPrizes = (index: number) => {
		if (index === 0) {
			return (total * 60) / 100;
		} else if (index === 1) {
			return (total * 30) / 100;
		} else if (index === 2) {
			return (total * 10) / 100;
		} else {
			return '';
		}
	};

	console.log(users);
	useEffect(() => {
		setDisplayedUsers(users);
	}, [users]);
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
			console.log(index, displayedUsers.length);
			if (index > 2) newEntryRef.current.classList.add('--bgColor');
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
					newof.setAttribute('style', 'background-color: orange;');
					console.log('setting its back ground color');
					if (newof.style) {
						newof.style.animationDelay = animationDelay + 'ms';
						newof.style.border = '2px solid orange';
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
				newEntryRef.current.classList.add('--bgColor');
			}
			setTimeout(() => {
				console.log('adnawdaw');
				newEntryRef.current!.classList.remove('--bgColor');
				if (newEntryRef) {
					newEntryRef.current?.scrollTo({ top: 0 });
				}
			}, 10000);
		}
	};

	const changeScore = (score: string) => {
		return score;
	};

	return (
		<>
			<div
				ref={newEntryRef}
				className="leaderboard-scroll"
			>
				{displayedUsers.map((user: any, i) => {
					// console.log("jhadad", user);
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
}> = ({ index, userName, score, animation, background }) => {
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
					<span
						className="kiosk-index"
						style={kioskStyles.index}
					>
						{index}
					</span>
					<span
						className="kiosk-username"
						style={kioskStyles.name}
					>
						{userName}
					</span>
				</div>

				<div className="kiosk-prize-money-score">
					<span
						style={kioskStyles.name}
						className="kiosk-score"
					>
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
				Loco Bear: Your Ultimate Entertainment Hub In Bengaluru
			</div>
		</div>
	);
};
