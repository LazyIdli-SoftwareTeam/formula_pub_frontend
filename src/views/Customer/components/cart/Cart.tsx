import React from 'react';
import { t_combo } from '../../../../types/combo';
import './styles.css';
import { t_cart } from '../../../../types/cart';
import { addRsSymbol } from '../../../../utils/addRsSymbol';
import ComboAction from '../comboAction/ComboAction';

// this file will have all the components required after selecting the combos and proceeding for cart

//cart box with the combo description number of that combos and the total amount for each combo and the combined
const CartComboBox: React.FC<{ combo: t_combo }> = ({ combo }) => {
  return (
    <div className='cart-combo-box-container'>
      <div className='cart-combo-box-start'>
        <div className='--img'>
          <img src='/assets/cart/Frame 1200 copy.svg' />
        </div>
        <div className='--description'>
          <span className='--text'>{combo.comboName}</span>
          <span className='--price'>{addRsSymbol(combo.price.toString())}</span>
        </div>
      </div>
      <div className='cart-combo-box-end'>
        <div className='combo-actions'>
          <ComboAction numberOfItems={4} onAdd={() => {}} onDelete={() => {}} />
        </div>
        <div className='--price'>
          <span>{addRsSymbol(combo.price.toString())}</span>
        </div>
      </div>
    </div>
  );
};

//parent overlay element for the cart combo box
const CartCombo: React.FC<{ cart: t_cart }> = ({ cart }) => {
  return (
    <div className='cart-combo-container'>
      <div className='cart-combo-container-top-heading'>
        <span>Combos : </span>
      </div>
      <div className='cart-combo-container-combos'>
        {cart.combos.map((cart, i: number) => (
          <CartComboBox key={i} combo={cart.combo} />
        ))}
      </div>

      <div className='cart-combo-container-bottom'>
        <div className='cart-combo-container-start'>
          <span>Total: </span>
        </div>
        <div className='cart-combo-container-end'>{addRsSymbol('3000')}</div>
      </div>
    </div>
  );
};

const tempCart: t_cart = {
  combos: [
    {
      combo: {
        comboDescription:
          'Get 2 beers with the best chicken tikka 150gm 6 pieces',
        comboName: 'Maharaja non veg combo',
        numberOfRides: 2,
        price: 2000,
        otherItems: '',
      },
      iteration: 2,
    },
    {
      combo: {
        comboDescription:
          'Get 2 beers with the best chicken tikka 150gm 6 pieces ;adjlkjw;qsksqx4;qskqxq04skrssx4rqs;kqsrx4qs;srkqxs4;srkqx4s;x;  dlqkjwkssx4ksxs4ksqxs4kq;x4k;xkqx4sksx4qkrsxq4krsrsx4qksx4ksx4q',
        comboName: 'Maharaja non veg combo',
        numberOfRides: 2,
        price: 2000,
        otherItems: '',
      },
      iteration: 2,
    },
  ],
};

const Cart = () => {
  return (
    <div className='cart-container'>
      <CartCombo cart={tempCart} />
    </div>
  );
};

export default Cart;
