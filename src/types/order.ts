import { t_cart } from './cart';
import { t_coupon } from './coupon';
import { t_userInfo } from './userInfo';

export type t_order = {
  cart: t_cart;
  totalAmount: number;
  rides: number;
  orderDescription: string;
  couponApplied?: t_coupon;
  users: t_userInfo[];
};
