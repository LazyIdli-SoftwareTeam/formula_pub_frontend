import React from 'react';
import './styles.css';
import { addRsSymbol } from '../../utils/addRsSymbol';
import { cartTotal } from '../../utils/cartTotal';
import { t_order } from '../../types/order';

const Bill: React.FC<{ order: t_order }> = ({ order }) => {
  const cartTotalValue = cartTotal(order.cart, order.couponApplied);
  return (
    <div className="global-view-bill-container">
      <div className="global-bill-top">
        {order.cart.combos.map((combo, i) => {
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
          <span className="--price">
            {addRsSymbol(cartTotalValue.subTotal.toString())}
          </span>
        </div>

        <div className="global-bill-table --tax">
          <span className="--total">Tax</span>
          <span className="--price">
            {addRsSymbol(cartTotalValue.taxPrice.toString())}
          </span>
        </div>
      </div>
      <div className="global-bill-bottom">
        <span
          style={
            order.couponApplied
              ? { color: '#C1C1C1', fontSize: '12px', fontWeight: '500' }
              : {}
          }
          className="--total --btm-total"
        >
          Total
        </span>
        <span
          style={
            order.couponApplied
              ? { color: '#C1C1C1', fontSize: '12px', fontWeight: '500' }
              : {}
          }
          className="--price --btm-price"
        >
          {addRsSymbol(cartTotalValue.beforeCouponAppliedPrice.toString())}
        </span>
      </div>
      {order.couponApplied ? (
        <div className="global-bill-coupon">
          <span className="--total --coupon-total --coupon">
            Coupon ({order.couponApplied.name})
          </span>
          <span className="--price --coupon-price">
            -{addRsSymbol(cartTotalValue.couponPrice.toString())}
          </span>
        </div>
      ) : null}

      {order.couponApplied ? (
        <div className="global-bill-bottom" style={{ borderTop: 'none' }}>
          <span className="--btm-subtotal">To Pay</span>
          <span className="--btm-subprice">
            {addRsSymbol(cartTotalValue.totalAfterTax.toString())}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Bill;
