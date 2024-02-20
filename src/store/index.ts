import { configureStore } from '@reduxjs/toolkit';

import discountReducer from './discount-slice.ts';
import modalUIReducer from './modal-ui-slice.ts';
import navigationUIReducer from './navigation-ui-slice.ts';

const store = configureStore({
  reducer: {
    discount: discountReducer,
    modalUI: modalUIReducer,
    navigationUI: navigationUIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
