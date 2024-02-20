import { TDetailDiscountInfo } from './Discount.ts';

export enum EModalUIType {
  NONE,
  DISCOUNT_DETAIL,
  ERROR,
  LOADING,
  NOTIFICATION,
}

export type TModalUIState = {
  type: EModalUIType;
  detailInfo?: TDetailDiscountInfo | null;
};

export enum ENavigationMenu {
  HOME = 'Home',
  DISCOUNTS = 'Discounts',
  SETTINGS = 'Settings',
  ABOUT = 'About',
}

export type TNavigationState = {
  menus: ENavigationMenu[];
  currentMenu: ENavigationMenu;
  isMenuOpen: boolean;
};
