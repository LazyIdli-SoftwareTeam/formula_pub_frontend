import Card from "../card/Card";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="main-container-box">
    <div className="main-container-overlay">

    </div>
    <div className="main-container">
      <div className="card--container">
        <div className="container--details">
          <h1>Combos</h1>
          <p>Choose a combo to start racing</p>
        </div>
        <div className="container-cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardContainer;
