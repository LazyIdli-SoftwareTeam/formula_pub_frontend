import './styles.css';

const LeaderboardHead = () => {
    return (
        <div className="leader-board-head-container">
            <div className="--index">
                <span>
                    POS
                </span>
            </div>
            <div className="--name">
                <span>Name</span>
            </div>
            <div className="--total-score --score">
                <span>Total Score</span>
            </div>
            <div className="--score --track1">
                <span>Track 1</span>
            </div>
            <div className="--score --track2">
                <span>Track 2</span>
            </div>
            <div className="--score --track3">
                <span>Track 3</span>
            </div>
        </div>
    );
};
export default LeaderboardHead;

export const LeaderboardIndividualHeader = () => {
    return (
        <div className="leader-board-header-individual-container">
            <div className="--index">
            <span>
                    POS
                </span>
            </div>
            <div className="--name">
                <span>Name</span>
            </div>
            <div className="--score">
                <span>Score</span>
            </div>
        </div>
    );
};
