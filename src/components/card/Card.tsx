import React, { useState } from "react";
import drink from "../../assets/images/drink.png";
import "./Card.css";
import { t_combo } from "../../types/combo";
import { addRsSymbol } from "../../utils/addRsSymbol";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store";
// import { t_order } from "../../types/order";

const Card: React.FC<{ combo: t_combo }> = ({ combo }) => {
  const [quantity, setQuantity] = useState(0);
  // const dispatch = useDispatch();
  // const order: t_order = useSelector((state: RootState) => state.order);
  // const addComboInCart = () => {
  //   const index = order.cart.combos.findIndex(com => com.combo.id = combo.id); 
  //   if (index < 0) { 
  //     addCombo(combo);
  //   } else {
  //     incrementCombo({ index: index }); 
  //   }
  // }

  // const remoteComboFromCart = () => {
  //   const index = order.cart.combos.findIndex(com => com.combo.id = combo.id); 
  //   if (index >= 0) {
  //     if (order.cart.combos[index].iteration === 1) {
  //       removeCombo({ index: index });
  //     } else {

  //     }
  //   }
  // }

  return (
    <div className="card">
      <img src={drink} alt="card_image" className="card--image" />

      <div className="card--content">
        <p className="card--heading">{combo.comboName}</p>
        <span className="card--price">{addRsSymbol(combo.price.toString())}</span>
        <p className="card-description">
          {combo.comboDescription}
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
