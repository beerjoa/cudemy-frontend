import { CudmAPI } from '#api/index.ts';

import {
  TGetDiscountData,
  TGetDiscountByCountryCodeParams,
} from '#types/Discount.ts';

const getDiscountByCountryCode = async (
  params: TGetDiscountByCountryCodeParams,
) => {
  return CudmAPI.get<TGetDiscountData>('/udemy/discount-status', {
    params,
  });
};

export default {
  getDiscountByCountryCode,
};
