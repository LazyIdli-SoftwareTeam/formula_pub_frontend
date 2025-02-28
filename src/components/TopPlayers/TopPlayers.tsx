/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './styles.css';
import { PAGE_STATE } from '../../views/LeaderboardKiosk/components/HeaderKiosk/LeaderboardKioskHeader';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { getTopPlayers } from '../../api/scores';

const TopPlayers = () => {
	const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
	const [players, setPlayers] = useState<any>([]);

	useEffect(() => {
		const onAccept = (response: AxiosResponse) => {
			if (response.status === HttpStatusCode.Ok) {
				setPlayers(response.data);
			} else {
				setPageState(PAGE_STATE.REJECTED);
			}
		};
		const onReject = () => {
			setPageState(PAGE_STATE.REJECTED);
		};
		setPageState(PAGE_STATE.LOADING);
		getTopPlayers(onAccept, onReject);
	}, []);

	if (pageState === PAGE_STATE.REJECTED) return <></>;

	const getString = (i: number) => {
		if (i === 0) return 'Day';
		if (i === 1) return 'Week';
		if (i === 2) return 'Month';
	};

	return (
		<div className="lb-top-player-container">
			{players.map((player: any, i: number) => {
				if (!player) return <></>
				return (
					<div
						key={i}
						className="--categories-player"
					>
						<span className="--cat">Best Of The {getString(i)}</span>
						<span className="--user-name">{player.gamerTag}</span>
						<span className="--score">{player.score} Points</span>
					</div>
				);
			})}
		</div>
	);
};

export default TopPlayers;
