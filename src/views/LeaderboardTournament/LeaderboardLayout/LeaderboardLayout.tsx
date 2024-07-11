/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import LeaderboardFooter from '../../../components/LeaderboardFooter/LeaderboardFooter';
import LeaderboardIndividual from '../LeaderboardIndividual/LeaderboardIndividual';
// import LeaderboardList from '../LeaderboardList/LeaderboardList';
import './styles.css';
import LeaderboardList from '../LeaderboardList/LeaderboardList';

const LeaderboardLayout = () => {
    const [mainPage, setMainPage] = useState(true);
    const tracks = ['track1', 'track2', 'track3'];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        let id: any;
        if (mainPage) {
            id = setTimeout(() => {
                setMainPage(false);
                setIndex(0);
            }, 10000);
        } else {
            id = setTimeout(() => {
                setIndex(index + 1);
                if (index >= 2) {
                    setMainPage(true);
                    setIndex(0);
                }
            }, 5000);
        }
        return () => {
            clearTimeout(id);
        };
    }, [mainPage, index]);

    useEffect(() => {
        console.log(mainPage); 
        console.log(index);
    }, [index, mainPage])
    return (
        <div className="leader-board-layout-container">
            <div className="leader-board-top-container"></div>
            <div className="leader-board-content-container">
                {!mainPage ? (
                    <LeaderboardIndividual mapType={tracks[index]} />
                ) : (
                    <LeaderboardList />
                )}
            </div>
            <div className="leader-board-footer-container">
                <LeaderboardFooter />
            </div>
        </div>
    );
};

export default LeaderboardLayout;
