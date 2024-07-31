import * as React from 'react';
import './styles.css'

const LeaderboardPosters: React.FC<{index: number }> = ({ index }) => {
    
    return (
        <div className='leader-board-poster-container'>
            <img src={index == 1 ? 'Slide 16_9 - 1.svg' : 'TOURNAMENT AD final 3.svg'} />
        </div>
    )
}

export default LeaderboardPosters;