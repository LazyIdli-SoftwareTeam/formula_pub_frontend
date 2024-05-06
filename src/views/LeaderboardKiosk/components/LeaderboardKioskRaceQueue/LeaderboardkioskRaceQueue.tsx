import "./styles.css"
import { t_userInfo } from "../../../../types/userInfo";


const kioskRaceQueuStyles = (index: number) => {
  if (index <= 4) {
    return {
      index: {
        background: 'var(--Tehe-Blue, #1CB1D9)' ,
        color:'#F4F4F4'
      },
      root:{
        'box-shadow' : '0px 0px 8px 0px #1CB1D9CC',
      },
     
    };
  } else {
    return { index: {}, root: {} };
  }
};


export const LeaderboardKioskRaceCard : React.FC<{
    index:number;
    userName:string;
    site:string;
    
    }> = ({index,userName,site}) =>{
      const kioskRace = kioskRaceQueuStyles(index)
      return (
        <>
        <div className="main-card-in-race-queue">
            <div className="kiosk-race-card-queue-main" style={kioskRace.root}>
               <div className="">
                <span className="kiosk-race-queue-index" style= {kioskRace.index}>{index}</span>
                <span className="kiosk-race-queue-username">{userName}</span>
               </div>
                <span className="kiosk-go-to-site">{site}</span>
            </div>
          
         
        </div>
        <hr className="horizonatl-race-queue"/>
</>
      )
    }
    
export const LeaderboardKioskRaceUsers : React.FC<{ users: t_userInfo[] }> = ({ users }) => {
        return (
          <div className="">
            <p className="race-queue-kiosk-name">NAME</p>
            {new Array(15).fill(0).map((_, i) => (
              <LeaderboardKioskRaceCard
                index={i+1}
                key={i}
                site={'Go to Site'}
                userName={users[0].name}  
              />
            ))}
          </div>
        );
      };

export const RaceQueueFooter = () =>{
    return (
        <div className="footer-race-queue-last">
            <span className="footer-race-queue-head">PLAYERS IN BLUE, PLEASE REPORT AT THE RACE AREA</span>
        </div>
    )
}

export const LeaderboardKioskRaceQueue = () =>{
    return (
        <div>
            <div className="leader-board-race-queue-heading">
                <p className="race-queue-heading">RACE QUEUE</p>
            </div>
           <div className="leader-kiosk-race-queue-size">
           <LeaderboardKioskRaceUsers
          users={[
            {
              name: 'Sahil',
              phoneNumber: '231231313',
              type: 'host',
              raceCode: '12312',
            },
          ]}
         
        />
           </div>
           <RaceQueueFooter/>
        </div>
    )
}

