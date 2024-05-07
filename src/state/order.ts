import { createSlice } from '@reduxjs/toolkit';
import { t_order } from '../types/order';

const initialState: t_order = {
  cart: { combos: [] },
  orderDescription: '',
  rides: 0,
  totalAmount: 0,
  users: [],
  host: {
    name: '',
    phoneNumber: '',
    type: 'host',
  },
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
      state.cart.combos.push({ combo: payload, iteration: 1 });
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
    setHostName: (state, { payload }) => {
      state.host.name = payload;
    },
    setHostPhoneNumber: (state, { payload }) => {
      state.host.phoneNumber = payload;
    },
    applyCoupon: (state, { payload }) => {
      state.couponApplied = payload;
    },
    removeCoupon: (state) => {
      state.couponApplied = undefined;
    },
    editUserName: (state, { payload }) => {
      if (state.users[payload.index]) {
        state.users[payload.index].name = payload.name;
      } else {
        state.users[payload.index] = {
          name: payload.name,
          phoneNumber: '',
          type: 'user',
        };
      }
    },
    sethostId: (state, { payload }) => {
      state.host._id = payload;
    },
    editPhoneNumber: (state, { payload }) => {
      if (state.users[payload.index]) {
        state.users[payload.index].phoneNumber = payload.phoneNumber;
      } else {
        state.users[payload.index] = {
          name: '',
          phoneNumber: payload.phoneNumber,
          type: 'user',
        };
      }
    },
  },
});

export const {
  addCombo,
  addUser,
  applyCoupon,
  editPhoneNumber,
  editUserName,
  removeCoupon,
  decrementCombo,
  incrementCombo,
  setHostName,
  setHostPhoneNumber,
  setUsers,
  removeCombo,
  removeUser,
  setOrderDescription,
  setRides,
  setTotalAmount,
  sethostId
} = orderSlice.actions;

export default orderSlice.reducer;
