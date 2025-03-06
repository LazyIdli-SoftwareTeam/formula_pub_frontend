import "./styles.css";

interface BottomPanelProps {
  name: string;
  score: string;
  position: number;
  avtarIndex: number;
}
// const avatarImages = [
//   "Avatar-1.png",
//   "Avatar-2.png",
//   "Avatar-3.png",
//   "Avatar-4.png",
//   "Avatar-5.png",
// ];

const BottomPanel = (props: BottomPanelProps) => {
  const getPos = (pos: number) => {
    if (pos % 10 === 1) return "st";
    if (pos % 10 === 2) return "nd";
    if (pos % 10 === 3) return "rd";
    return "th";
  };
  return (
    <div className="bottom-panel-container">
      <div className="bottom-panel-image-container">
        <img src={"Sharuk.jpg"} />
      </div>
      <div className="bottom-panel-text-container">
        <div className="--player-info">
          <span className="--name">{props.name}</span>
          <span className="--score">{props.score}</span>
        </div>
        <div className="--player-position">
          <span className="--pos">
            {props.position + 1}
            <sup>{getPos(props.position + 1)}</sup>
          </span>
          <span className="--text">position</span>
        </div>
      </div>
    </div>
  );
};
export default BottomPanel;
