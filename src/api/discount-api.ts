import { CudmAPI } from '#api/index';

import {
  IGetDiscountData,
  IGetDiscountByCountryCodeParams,
} from '#types/Discount';

const getDiscountByCountryCode = async (
  params: IGetDiscountByCountryCodeParams,
) => {
  return CudmAPI.get<IGetDiscountData>('/udemy/discount-status', {
    params,
  });
};

export default {
  getDiscountByCountryCode,
};
