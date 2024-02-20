import { createSlice } from '@reduxjs/toolkit';

import { ENavigationMenu, TNavigationState } from '#types/UI.ts';

const initialState: TNavigationState = {
  menus: [ENavigationMenu.HOME, ENavigationMenu.DISCOUNTS],
  currentMenu: ENavigationMenu.HOME,
  isMenuOpen: false,
};

const navigationUISlice = createSlice({
  name: 'navigationUI',
  initialState,
  reducers: {
    openAndCloseMenu(state, _) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    openMenu(state, _) {
      state.isMenuOpen = true;
    },
    closeMenu(state, _) {
      state.isMenuOpen = false;
    },
  },
});

export const navigationUIActions = navigationUISlice.actions;

export default navigationUISlice.reducer;
