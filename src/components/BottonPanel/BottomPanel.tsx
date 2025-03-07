import Avatar1 from "../../assets/images/avatar/Avatar1.png";
import "./styles.css";

interface BottomPanelProps {
  name: string;
  score: string;
  position: number;
  avtarIndex: number;
}

// const avatarImages = [
//   "Avatar1.png",
//   "Avatar2.png",
//   "Avatar3.png",
//   "Avatar4.png",
//   "Avatar5.png",
// ];

const BottomPanel = (props: BottomPanelProps) => {
  const getPos = (pos: number) => {
    if (pos % 10 === 1 && pos !== 11) return "st";
    if (pos % 10 === 2 && pos !== 12) return "nd";
    if (pos % 10 === 3 && pos !== 13) return "rd";
    return "th";
  };

  // Ensure avtarIndex is within bounds
  // const avatarSrc = avatarImages[props.avtarIndex % avatarImages.length];

  return (
    <div className="bottom-panel-container">
      <div className="bottom-panel-image-container">
        <img src={Avatar1} alt="Player Avatar" />
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
