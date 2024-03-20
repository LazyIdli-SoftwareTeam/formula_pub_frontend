import React from 'react';
import drink from '../../assets/images/drink.png';
import './Card.css';
import { t_combo } from '../../types/combo';
import { addRsSymbol } from '../../utils/addRsSymbol';

const Card: React.FC<{
  combo: t_combo;
  quantity: number;
  onAddClick: (combo: t_combo) => void;
  onDecrementClick: (combo: t_combo) => void;       
}> = ({ combo, onAddClick, onDecrementClick, quantity }) => {   

  return (
    <div className="card">
      <img src={drink} alt="card_image" className="card--image" />

      <div className="card--content">
        <p className="card--heading">{combo.comboName}</p>
        <span className="card--price">
          {addRsSymbol(combo.price.toString())}
        </span>
        <p className="card-description">{combo.comboDescription}</p>
        {quantity > 0 && (
          <div className="card--quantity">
            <button
              className="card--quantity--button"
              onClick={() => onDecrementClick(combo)}
            >
              -
            </button>
            <span className="card--quantity--number">{quantity}</span>
            <button
              className="card--quantity--button"
              onClick={() => onAddClick(combo)}
            >
              +
            </button>
          </div>
        )}
        {quantity === 0 && (
          <button
            onClick={() => onAddClick(combo)}
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
