import * as React from 'react';
import './styles.css'

const LeaderboardPosters: React.FC<{index: number }> = ({ index }) => {
    
    return (
        <div className='leader-board-poster-container'>
            <img src={index == 1 ? 'Frame 12289 (1).svg' : 'TOURNAMENT AD v2 (1).svg'} />
        </div>
    )
}

export default LeaderboardPosters;