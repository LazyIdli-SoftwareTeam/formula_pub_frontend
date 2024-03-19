import { createSlice } from '@reduxjs/toolkit';
import { t_order } from '../types/order';

const initialState: t_order = {
  cart: { combos: [] },
  orderDescription: '',
  rides: 0,
  totalAmount: 0,
  users: [],
};
const orderSlice = createSlice({
  initialState,
  name: 'order-customer',
  reducers: {
    setRides: (state, { payload }) => {
      state.rides = payload;
    },
    setOrderDescription: (state, { payload }) => {
      state.orderDescription = payload;
    },
    setTotalAmount: (state, { payload }) => {
      state.totalAmount = payload;
    },
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    removeUser: (state, { payload }) => {
      const i = state.users.findIndex(
        (user) =>
          user.phoneNumber === payload.phoneNumber && user.name === payload.name
      );
      if (i >= 0) {
        state.users.splice(i, 1);
      }
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    addCombo: (state, { payload }) => {
      state.cart.combos.push(payload);
    },
    incrementCombo: (state, { payload }) => {
      state.cart.combos[payload.index].iteration++;
    },
    decrementCombo: (state, { payload }) => {
      state.cart.combos[payload.index].iteration--;
    },
    removeCombo: (state, { payload }) => {
      state.cart.combos.splice(payload.index, 1);
    },
  },
});

export const {
  addCombo,
  addUser,
  decrementCombo,
  incrementCombo,
  removeCombo,
  removeUser,
  setOrderDescription,
  setRides,
  setTotalAmount,
} = orderSlice.actions;


export default orderSlice.reducer;