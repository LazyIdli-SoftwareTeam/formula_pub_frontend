import "./styles.css";
import ShakibAssets from "../../assets/images/avatars/Avatar-1.png";
interface BottomPanelProps { 
  name: string; 
  score: string; 
  position: string;
}
const BottomPanel = (props: BottomPanelProps) => {
  return (
    <div className="bottom-panel-container">
      <div className="bottom-panel-image-container">
        <img src={ShakibAssets} />
      </div>
      <div className="bottom-panel-text-container">
        <div className="--player-info">
          <span className="--name">${}</span>
          <span className="--score">01.23.322</span>
        </div>
        <div className="--player-position">
          <span className="--pos">
            24<sup>th</sup>
          </span>
          <span className="--text">position</span>
        </div>
      </div>
    </div>
  );
};
export default BottomPanel;
