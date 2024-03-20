import { t_cart } from '../types/cart';
import { t_coupon } from '../types/coupon';

export const cartTotal = (cart: t_cart, coupon?: t_coupon) => {
  let subTotal = 0;
  let couponPrice = -1;
  let taxPrice = -1;
  for (const el of cart.combos) {
    subTotal += el.combo.price * el.iteration;
  }
  if (coupon) {
    couponPrice = (subTotal * coupon.discountPercentage) / 100;
    subTotal = subTotal - couponPrice;
  }

  taxPrice = (subTotal * 18) / 100;
  const totalAfterTax = subTotal + taxPrice;
  return {
    subTotal: subTotal,
    couponPrice: couponPrice,
    totalAfterTax: totalAfterTax,
    taxPrice: taxPrice,
  };
};

export const calculateTotalRides = (cart: t_cart) => {
  let rides = 0;
  for (const el of cart.combos) {
    rides += el.combo.numberOfRides * el.iteration;
  }
  return rides;
};
