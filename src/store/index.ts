import { Store, configureStore } from '@reduxjs/toolkit';
import orderReducer from '../state/order';


//Global store available to the whole application
export const store: Store = configureStore({
  reducer: {
    order: orderReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
