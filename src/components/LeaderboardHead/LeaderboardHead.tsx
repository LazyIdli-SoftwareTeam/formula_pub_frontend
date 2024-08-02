import './styles.css';

const LeaderboardHead = () => {
  return (
    <div className="leader-board-head-container">
      <div className="--index">
        <span>Rank</span>
      </div>
      <div className="--name">
        <span>Player</span>
      </div>
      <div className="--total-score --score">
        <span>Total Score</span>
      </div>
      <div className="--score --track1">
        <span>British GP</span>
      </div>
      <div className="--score --track2">
        <span>Dutch GP</span>
      </div>
      <div className="--score --track3">
        <span>Belgium GP</span>
      </div>
    </div>
  );
};
export default LeaderboardHead;

export const LeaderboardIndividualHeader = () => {
  return (
    <div className="leader-board-header-individual-container">
      <div className="--index">
        <span>Rank</span>
      </div>
      <div className="--name">
        <span>Player</span>
      </div>
      <div className="--score">
        <span>Time</span>
      </div>
    </div>
  );
};
