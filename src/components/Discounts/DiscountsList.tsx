import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DiscountItem from '#components/Discounts/DiscountItem';
import Loading from '#components/Discounts/Loading';
import Error from '#components/Discounts/Error';

import { fetchDiscountStatus } from '#store/discount-slice';
import { AppDispatch } from '#store/index';

type DiscountsListProps = any;

const DiscountsList: React.FC<DiscountsListProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const discountData = useSelector((state: any) => state.discount.discountData);
  const loading = useSelector((state: any) => state.discount.loading);
  const error = useSelector((state: any) => state.discount.error);

  useEffect(() => {
    dispatch(fetchDiscountStatus('US'));
  }, [dispatch]);

  const handleClick = () => {
    // TODO: Implement
    console.log('Clicked');
  };

  return (
    <div className="grid max-[900px]:grid-cols-1 min-[816px]:max-xl:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto place-items-center">
      {loading && <Loading />}
      {error && <Error error={error} onRetry={() => {}} />}
      {!loading &&
        !error &&
        discountData &&
        discountData.map((discount: any, index: number) => (
          <DiscountItem
            key={index}
            title={discount.title}
            description={discount.description}
            updatedAt={discount.updatedAt}
            result={discount.result}
            onClick={handleClick}
          />
        ))}
    </div>
  );
};

export default DiscountsList;
