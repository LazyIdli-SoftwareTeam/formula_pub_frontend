import card1 from "../../assets/images/card-1.svg";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src={card1} alt="card_image" className="card--image" />

      <div className="card--content">
        <p className="card--heading">Standard Combo</p>
        <span className="card--price">₹30</span>
        <p className="card-description">
          Details about combo and etc that are relevant to the client.{" "}
        </p>
        <button className="card--add--button">Add</button>
      </div>
    </div>
  );
};

export default Card;
