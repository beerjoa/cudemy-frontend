import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DiscountItem from '#components/Discounts/DiscountItem.tsx';
import Error from '#components/Discounts/Error.tsx';

import { fetchDiscountStatus } from '#store/discount-slice.ts';
import { modalUIActions } from '#store/modal-ui-slice.ts';
import { AppDispatch } from '#store/index.ts';
import { RootState } from '#store/index.ts';
import { TDetailDiscountInfo } from '#types/Discount.ts';
import { EModalUIType } from '#types/UI.ts';

interface DiscountsListProps extends React.ComponentPropsWithoutRef<'div'> {}

const DiscountsList: React.FC<DiscountsListProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const discountData = useSelector(
    (state: RootState) => state.discount.discountData,
  );
  const loading = useSelector((state: RootState) => state.discount.loading);
  const error = useSelector((state: RootState) => state.discount.error);

  useEffect(() => {
    dispatch(fetchDiscountStatus('US'));
  }, [dispatch]);

  const handleClick = (detailDiscountInfo: TDetailDiscountInfo) => {
    dispatch(
      modalUIActions.openModal({
        type: EModalUIType.DISCOUNT_DETAIL,
        detailInfo: detailDiscountInfo,
      }),
    );
  };

  return (
    <>
      {loading ? (
        <div className="grid gap-4 max-w-6xl mx-auto place-items-center">
          <span className="loading loading-spinner loading-lg h-32 rounded-md overflow-hidden shadow-lg p-6 transform transition-transform duration-500"></span>
        </div>
      ) : (
        <div className="grid max-[900px]:grid-cols-1 min-[816px]:max-xl:grid-cols-2 xl:grid-cols-3 gap-4 max-md:gap-2 max-w-6xl mx-auto place-items-center">
          {error ? <Error error={error} onRetry={() => {}} /> : null}
          {!loading && !error && discountData
            ? discountData.map((discount: any, index: number) => (
                <DiscountItem
                  key={index}
                  title={discount.title}
                  description={discount.description}
                  updatedAt={discount.updatedAt}
                  result={discount.result}
                  onClick={handleClick}
                />
              ))
            : null}
        </div>
      )}
    </>
  );
};

export default DiscountsList;
