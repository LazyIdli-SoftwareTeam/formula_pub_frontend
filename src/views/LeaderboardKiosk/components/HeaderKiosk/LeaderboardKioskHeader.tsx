


import GillyIcon from "../../../../assets/icons/Gilly-icon";
import TehoIcon from "../../../../assets/icons/Teho-icon";

import "./LeaderboardKioskHeader.css"
//import { LeaderboardKioskFastestHeaderanimate } from "../LeaderBoardFatestScore/animation";
//import { LeaderboardKioskFastestHeader } from "../LeaderBoardFatestScore/newanimation";
import { LeaderboardKioskRaceQueue } from "../LeaderboardKioskRaceQueue/LeaderboardkioskRaceQueue";
import {LeaderboardKioskFastestHeader} from "../LeaderBoardFatestScore/newanimation";

export const RightsideKioskHeader = () =>{
    return(
        <svg width="165" height="64" viewBox="0 0 165 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M153 45C154.105 45 155 44.1046 155 43C155 41.8954 154.105 41 153 41L153 45ZM153 41L-41 41L-41 45L153 45L153 41Z" fill="#F8990B"/>
<path d="M158 33.5C159.105 33.5 160 32.6046 160 31.5C160 30.3954 159.105 29.5 158 29.5L158 33.5ZM158 29.5L-41 29.5L-41 33.5L158 33.5L158 29.5Z" fill="#F8990B"/>
<path d="M163 22C164.105 22 165 21.1046 165 20C165 18.8954 164.105 18 163 18L163 22ZM163 18L-41 18L-41 22L163 22L163 18Z" fill="#F8990B"/>
</svg>

    )
}

export const LeftsideKioskHeader = () =>{
    return(
        <svg width="168" height="64" viewBox="0 0 168 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22L12 18ZM12 22L234 22L234 18L12 18L12 22Z" fill="#1CB1D9"/>
<path d="M7 30C5.89543 30 5 30.8954 5 32C5 33.1046 5.89543 34 7 34L7 30ZM7 34L234 34L234 30L7 30L7 34Z" fill="#1CB1D9"/>
<path d="M2 42C0.89543 42 -9.65645e-08 42.8954 0 44C9.65645e-08 45.1046 0.895431 46 2 46L2 42ZM2 46L234 46L234 42L2 42L2 46Z" fill="#1CB1D9"/>
</svg>

    )
}

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
           <div className="gilli"> <GillyIcon width={72} height={35}/></div>
            <TehoIcon className="gilli" width={95} height={35}/>
        </div>
    <LeaderboardKioskRaceQueue/>
    </>
    )
    
     
    
    
}

export const LeaderboardkioskMainpage = () =>{
    return (
        <div className='leader-board-kiosk-global-container'>
        
        <div className="leader-board-kiosk-header">
           <div className="gilli"> <GillyIcon width={72} height={35}/></div>
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
/*
<div>
        <div className="leader-board-kiosk-header">
            <GillyIcon/>
            <TehoIcon/>
        </div>
        <LeaderboardKioskRaceQueue/>
        </div>
/*
      <div className="main-fast-today-kiosk">
        <RightsideKioskHeader/>
        <span className="leader-board-kiosk-fastest-main-text">FASTEST OF TODAY</span>
        <LeftsideKioskHeader/>
      </div>
      <LeaderboardKioskFastestHeader/>
    */

      //<LeaderboardKioskRaceQueue/>

//<LeaderboardKioskFastestHeaderanimate/>