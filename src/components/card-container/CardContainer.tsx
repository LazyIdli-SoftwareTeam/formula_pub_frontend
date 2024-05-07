import { useDispatch, useSelector } from 'react-redux';
import {
  addCombo,
  decrementCombo,
  incrementCombo,
  removeCombo,
} from '../../state/order';
import { t_combo } from '../../types/combo';
import Card from '../card/Card';
import './CardContainer.css';
import { t_order } from '../../types/order';
import { RootState } from '../../store';
import React from 'react';

const CardContainer: React.FC<{ combos: t_combo[] }> = ({ combos }) => {
  const dispatch = useDispatch();
  const order: t_order = useSelector((state: RootState) => state.order);
  console.log(combos);
  const onAddClick = (combo: t_combo) => {
    const index = order.cart.combos.findIndex(
      (com) => com.combo._id === combo._id
    );
    if (index >= 0) {
      dispatch(incrementCombo({ index: index }));
    } else {
      dispatch(addCombo(combo));
    }
  };

  const onDecrementClick = (combo: t_combo) => {
    const index = order.cart.combos.findIndex(
      (com) => com.combo._id === combo._id
    );
    if (index < 0) return;
    if (order.cart.combos[index].iteration === 1) {
      dispatch(removeCombo({ index: index }));
    } else {
      dispatch(decrementCombo({ index: index }));
    }
  };

  return (
    <div className="main-container-box">
      <div className="main-container-overlay"></div>
      <div className="main-container">
        <div className="card--container">
          <div className="container--details">
            <h1>Combos</h1>
            <p>Choose a combo to start racing</p>
          </div>
          <div className="container-cards">
            {combos.map((combo, i) => {
              const index = order.cart.combos.findIndex(com => com.combo._id == combo._id); 
              const quantity = index < 0 ? 0 : order.cart.combos[index].iteration;
              return (
                <Card
                  onAddClick={onAddClick}
                  onDecrementClick={onDecrementClick}
                  combo={combo}
                  quantity={quantity}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
