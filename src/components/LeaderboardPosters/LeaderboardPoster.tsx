import * as React from 'react';
import './styles.css'

const LeaderboardPosters: React.FC<{index: number }> = ({ index }) => {
    
    return (
        <div className='leader-board-poster-container'>
            <img src={index == 3 ? 'Frame 12289.svg' : 'TOURNAMENT AD v2.svg'} />
        </div>
    )
}

export default LeaderboardPosters;