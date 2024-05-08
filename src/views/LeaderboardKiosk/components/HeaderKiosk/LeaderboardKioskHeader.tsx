import  { useState, useEffect } from 'react';

//import gamebar from "../../../../assets/images/gamebar.png";
//import GillyIcon from "../../../../assets/icons/Gilly-icon";
import FinalLogo from "../../../../assets/images/FinalLogo.png";
import TehoIcon from "../../../../assets/icons/Teho-icon";

import "./LeaderboardKioskHeader.css"
import { LeaderboardKioskRaceQueue } from "../LeaderboardKioskRaceQueue/LeaderboardkioskRaceQueue";
import {LeaderboardKioskFastestHeader} from "../LeaderBoardFatestScore/newanimation";




export const LeaderboardkioskMainpage = () => {
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowLeaderboard(prevState => !prevState);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='leader-board-kiosk-global-container'>
            <div className="leader-board-kiosk-header">
                <img src={FinalLogo} className="bar-image" />
                <TehoIcon className="gilli" width={95} height={35} />
            </div>
            <div className="main-fast-today-kiosk">
                <RightSide />
                <span className="leader-board-kiosk-fastest-main-text">
                    {showLeaderboard ? "LEADERBOARD" : "FASTEST OF TODAY"}
                </span>
                <LeftSide />
            </div>
            <LeaderboardKioskFastestHeader />
        </div>
    );
};



export const RightSide = ()=>{
    return (
    <div className="right-side">
        <hr className="horizontal-right" />
        <hr className="horizontal-right-1" />
        <hr className="horizontal-right-2" />
    </div>
    )
}

export const LeftSide = () =>{
    return(
        <div className="left-side">
            <hr className="horizontal-left"/>
            <hr className="horizontal-left-1"/>
            <hr className="horizontal-left-2"/>
        </div>
    )
}




export const LeaderboardKioskHeader = () =>{
    return (
       <>
      <div className="leader-board-kiosk-header">
            <img src ={FinalLogo} className="bar-image"/>
            <TehoIcon className="gilli" width={95} height={35}/>
        </div>
    <LeaderboardKioskRaceQueue/>
    </>
    )
    
     
    
    
}

/*export const LeaderboardkioskMainpage = () =>{
    return (
        <div className='leader-board-kiosk-global-container'>
        
        <div className="leader-board-kiosk-header">
          
           <img src ={FinalLogo} className="bar-image"/>
            <TehoIcon className="gilli" width={95} height={35}/>
        </div>
        
        <div className="main-fast-today-kiosk">
       
        <RightSide/>
        <span className="leader-board-kiosk-fastest-main-text">FASTEST OF TODAY</span>
        <LeftSide/>
        </div>
        <LeaderboardKioskFastestHeader/>
        </div>
    )
}
*/

// <div className="gilli"> <GillyIcon width={72} height={35}/></div>
