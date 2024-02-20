import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TModalUIState, EModalUIType } from '#types/UI.ts';

const initialState: TModalUIState = {
  type: EModalUIType.NONE,
  detailInfo: null,
};

const modalUISlice = createSlice({
  name: 'modalUI',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<TModalUIState>) {
      state.type = action.payload.type;
      state.detailInfo = action.payload.detailInfo;
    },
    closeModal(state, _) {
      state.type = EModalUIType.NONE;
    },
  },
});

export const modalUIActions = modalUISlice.actions;

export default modalUISlice.reducer;
