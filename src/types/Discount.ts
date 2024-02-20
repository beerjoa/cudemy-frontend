export type TGetDiscountDataResult = {
  discountStatus: boolean | null;
  startedAt: string;
  endedAt: string;
};

export type TGetDiscountData = {
  title: string;
  description: string;
  updatedAt: string;
  result: TGetDiscountDataResult;
};

export type TDetailDiscountInfo = {
  countryCode: string;
  countryName: string;
  countryFlag: string;
  description: string;
  updatedAt: string;
  discountStatus: boolean | null;
  startedAt: string;
  endedAt: string;
};

export type TGetDiscountByCountryCodeParams = {
  countryCode: string;
};
