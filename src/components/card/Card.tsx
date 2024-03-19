import { useState } from "react";
import drink from "../../assets/images/drink.png";
import "./Card.css";

const Card = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="card">
      <img src={drink} alt="card_image" className="card--image" />

      <div className="card--content">
        <p className="card--heading">Standard Combo</p>
        <span className="card--price">₹30</span>
        <p className="card-description">
          Details about combo and etc that are relevant to the client.{" "}
        </p>
        {quantity > 0 && (
          <div className="card--quantity">
            <button
              className="card--quantity--button"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
            <span className="card--quantity--number">{quantity}</span>
            <button
              className="card--quantity--button"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        )}
        {quantity === 0 && (
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="card--add--button"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
