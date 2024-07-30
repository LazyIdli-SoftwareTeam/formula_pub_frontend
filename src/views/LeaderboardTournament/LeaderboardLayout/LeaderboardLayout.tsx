/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import LeaderboardIndividual from '../LeaderboardIndividual/LeaderboardIndividual';
// import LeaderboardList from '../LeaderboardList/LeaderboardList';
import './styles.css';
import LeaderboardList from '../LeaderboardList/LeaderboardList';
import LeaderboardPosters from '../../../components/LeaderboardPosters/LeaderboardPoster';
import Nav from '../../../components/Nav/Nav';

const LeaderboardLayout = () => {
    const [mainPage, setMainPage] = useState(true);
    const tracks = [
        {
            name: 'British GP',
            value: 'track1',
        },
        {
            name: 'Hungarian GP',
            value: 'track2',
        },
        {
            name: 'Belgium GP',
            value: 'track3',
        },
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        let id: any;
        if (mainPage) {
            id = setTimeout(() => {
                setMainPage(false);
                setIndex(0);
            }, 20000);
        } else {
            id = setTimeout(() => {
                setIndex(index + 1);
                if (index >= 4) {
                    setMainPage(true);
                    setIndex(0);
                }
            }, 10000);
        }
        return () => {
            clearTimeout(id);
        };
    }, [mainPage, index]);
    if (index > 2) { 
        return <LeaderboardPosters index={index} /> 
    }

    return (
        <div className="leader-board-layout-container">
            <div className="leader-board-top-container">
                <Nav />
            </div>
            <div className="leader-board-content-container">
                {!mainPage ? (
                    <LeaderboardIndividual mapType={tracks[index]} />
                ) : (
                    <LeaderboardList />
                )}
            </div>
        </div>
    );
};

export default LeaderboardLayout;
