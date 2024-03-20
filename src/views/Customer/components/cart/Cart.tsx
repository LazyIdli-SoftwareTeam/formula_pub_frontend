import React from 'react';
import { t_combo } from '../../../../types/combo';
import './styles.css';
import { t_cart } from '../../../../types/cart';
import { addRsSymbol } from '../../../../utils/addRsSymbol';
import ComboAction from '../comboAction/ComboAction';
import { t_order } from '../../../../types/order';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import {
  addCombo,
  decrementCombo,
  incrementCombo,
  removeCombo,
} from '../../../../state/order';

// this file will have all the components required after selecting the combos and proceeding for cart

//cart box with the combo description number of that combos and the total amount for each combo and the combined
const CartComboBox: React.FC<{ combo: t_combo; iteration: number }> = ({
  combo,
  iteration,
}) => {
  const dispatch = useDispatch();
  const order: t_order = useSelector((state: RootState) => state.order);

  const onAddClick = () => {
    console.log('working')
    const index = order.cart.combos.findIndex(
      (com) => com.combo.id === combo.id
    );
    if (index >= 0) {
      dispatch(incrementCombo({ index: index }));
    } else {
      dispatch(addCombo(combo));
    }
  };

  const onDecrementClick = () => {
    const index = order.cart.combos.findIndex(
      (com) => com.combo.id === combo.id
    );
    if (index < 0) return;
    if (order.cart.combos[index].iteration === 1) {
      dispatch(removeCombo({ index: index }));
    } else {
      dispatch(decrementCombo({ index: index }));
    }
  };

  return (
    <div className="cart-combo-box-container">
      <div className="cart-combo-box-start">
        <div className="--img">
          <img src="/assets/cart/Frame 1200 copy.svg" />
        </div>
        <div className="--description">
          <span className="--text">{combo.comboName}</span>
          <span className="--price">{addRsSymbol(combo.price.toString())}</span>
        </div>
      </div>
      <div className="cart-combo-box-end">
        <div className="combo-actions">
          <ComboAction
            numberOfItems={iteration}
            onAdd={() => onAddClick()}
            onDelete={() => onDecrementClick()}
          />
        </div>
        <div className="--price">
          <span>{addRsSymbol(combo.price.toString())}</span>
        </div>
      </div>
    </div>
  );
};

//parent overlay element for the cart combo box
const CartCombo: React.FC<{ cart: t_cart }> = ({ cart }) => {
  const calculateTotal = () => {
    let amount = 0;
    for (const el of cart.combos) {
      amount += el.combo.price * el.iteration;
    }
    return amount;
  };
  return (
    <div className="cart-combo-container">
      <div className="cart-combo-container-top-heading">
        <span>Combos : </span>
      </div>
      <div className="cart-combo-container-combos">
        {cart.combos.map((cart, i: number) => (
          <CartComboBox key={i} combo={cart.combo} iteration={cart.iteration} />
        ))}
      </div>

      <div className="cart-combo-container-bottom">
        <div className="cart-combo-container-start">
          <span>Total: </span>
        </div>
        <div className="cart-combo-container-end">
          {addRsSymbol(calculateTotal().toString())}
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const order: t_order = useSelector((state: RootState) => state.order);
  return (
    <div className="cart-container">
      <CartCombo cart={order.cart} />
    </div>
  );
};

export default Cart;
