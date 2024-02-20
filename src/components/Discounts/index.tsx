import Twemoji from '#components/UI/Twemoji';

import DiscountDetail from './DiscountDetail.tsx';
import DiscountsList from './DiscountsList.tsx';

type DiscountsProps = any;

const Discounts: React.FC<DiscountsProps> = () => {
  return (
    <>
      <DiscountDetail />
      <div className="flex flex-col bg-base-200 items-center justify-start w-full rounded-lg p-8 max-md:p-4 mb-4 max-md:mb-2 min-h-screen">
        <div className="mb-4 max-md:mb-2">
          <Twemoji
            className="fill-current w-16 h-16 md:w-24 md:h-24"
            emojiClassName="w-16 h-16 md:w-24 md:h-24"
            emoji="🏷️"
          />
        </div>
        <h1 className="text-5xl max-md:text-2xl font-bold mb-4 max-md:mb-2">
          Udemy Discount Status
        </h1>
        <p className="text-xl max-md:text-xs text-center">
          Check the latest discounts on Udemy in your region.
        </p>
        <div className="divider place-content-center" />
        <DiscountsList />
      </div>
    </>
  );
};

export default Discounts;
