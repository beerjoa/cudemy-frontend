export interface IGetDiscountDataResult {
  discountStatus: boolean | null;
}

export interface IGetDiscountData {
  title: string;
  description: string;
  updatedAt: string;
  result: IGetDiscountDataResult;
}

export interface IGetDiscountByCountryCodeParams {
  countryCode: string;
}
