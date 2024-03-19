import React from 'react';
import './styles.css';
import { t_cart } from '../../types/cart';
import { addRsSymbol } from '../../utils/addRsSymbol';

const Bill: React.FC<{ cart: t_cart }> = ({ cart }) => {
  return (
    <div className="global-view-bill-container">
      <div className="global-bill-top">
        {cart.combos.map((combo, i) => {
          return (
            <div key={i} className="global-bill-table">
              <span className="--name">{combo.combo.comboName}</span>
              <span className="--iteration">x{combo.iteration}</span>
              <span className="--price">
                {addRsSymbol(combo.combo.price.toString())}
              </span>
            </div>
          );
        })}
        <div className="global-bill-table">
          <span className="--total">Subtotal</span>
          <span className="--price">{addRsSymbol('2323')}</span>
        </div>

        <div className="global-bill-table --tax">
          <span className="--total">Tax</span>
          <span className="--price">{addRsSymbol('150')}</span>
        </div>
      </div>
      <div className="global-bill-bottom">
        <span className="--total --btm-total">Total</span>
        <span className="--price --btm-price">{addRsSymbol('2323')}</span>
      </div>
    </div>
  );
};

export default Bill;
