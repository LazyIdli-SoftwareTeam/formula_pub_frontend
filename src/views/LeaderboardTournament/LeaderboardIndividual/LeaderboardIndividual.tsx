/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { LeaderboardIndividualHeader } from '../../../components/LeaderboardHead/LeaderboardHead';
import LeaderboardHeading from '../../../components/LeaderboardHeading/LeaderboardHeading';
import './styles.css';
import { PAGE_STATE } from '../../LeaderboardKiosk/components/HeaderKiosk/LeaderboardKioskHeader';
import { HttpStatusCode } from 'axios';
import CustomLoader from '../../../components/loader/CustomLoader';
import { getScores } from '../../../api/scores';
import LeaderboardIndividualCards from '../../../components/LeaderboardIndividualCard/LeadeboardIndividualCards';
// const BORDER= '1px solid #009db5'

const LeaderboardIndividual: React.FC<{ mapType: string }> = ({ mapType }) => {
    const [scores, setScores] = useState<any>([]);
    const [pageState, setPageState] = useState(PAGE_STATE.UNKNOWN);
    const getScoresMap = () => {
        setPageState(PAGE_STATE.LOADING);
        const onAccept = (response: any) => {
            console.log(response);
            if (response.status === HttpStatusCode.Accepted) {
                setPageState(PAGE_STATE.ACCEPTED);
                setScores(response.data.data);
                console.log(response);
            } else {
                setPageState(PAGE_STATE.REJECTED);
            }
        };
        const onReject = () => {
            setPageState(PAGE_STATE.REJECTED);
        };
        getScores(onAccept, onReject, { mapType: mapType });
    };
    useEffect(() => {
        getScoresMap();
    }, [mapType]);
    if (pageState === PAGE_STATE.LOADING) return <CustomLoader />;
    if (pageState === PAGE_STATE.REJECTED)
        return <span>Some error occurred try again later</span>;
    return (
        <div className="leader-board-list-container">
            <div className="leader-board-top-heading">
                <LeaderboardHeading heading={mapType} />
            </div>
            <div className="leader-board-list-scores-container">
                <LeaderboardIndividualHeader />
                {scores.map((score: any, i: number) => (
                    <LeaderboardIndividualCards
                        name={score.code.userName}
                        key={i}
                        score={score.score}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
};
export default LeaderboardIndividual;
