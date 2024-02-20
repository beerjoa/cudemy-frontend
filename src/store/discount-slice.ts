import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import DiscountAPI from '#api/discount-api.ts';
import { TGetDiscountData } from '#types/Discount.ts';

const initialDiscountResultState: Array<TGetDiscountData> = [
  {
    title: 'checkDiscountStatus-CA-1707516000019',
    description: 'Not supported region yet.',
    updatedAt: '',
    result: {
      discountStatus: null,
      startedAt: '',
      endedAt: '',
    },
  },
  {
    title: 'checkDiscountStatus-KR-1707516000019',
    description: 'Not supported region yet.',
    updatedAt: '',
    result: {
      discountStatus: null,
      startedAt: '',
      endedAt: '',
    },
  },
];

interface DiscountState {
  discountData: Array<TGetDiscountData>;
  loading: boolean;
  error: string | null;
}

const initialState: DiscountState = {
  discountData: initialDiscountResultState,
  loading: false,
  error: null,
};

export const fetchDiscountStatus = createAsyncThunk(
  'discount/fetchDiscountStatus',
  async (countryCode: string = 'US') => {
    // we call the DiscountAPI.getDiscountByCountryCode method to fetch the discount status just for now
    const response = await DiscountAPI.getDiscountByCountryCode({
      countryCode,
    });
    return [response.data];
  },
);

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscountStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiscountStatus.fulfilled, (state, action) => {
        const filteredDiscountData = state.discountData.filter(
          (discount) =>
            discount.title.split('-')[1] !==
            action.payload[0].title.split('-')[1],
        );

        state.loading = false;
        state.discountData = [...action.payload, ...filteredDiscountData];
      })
      .addCase(fetchDiscountStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch discount status';
      });
  },
});

export default discountSlice.reducer;
