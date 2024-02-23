import Twemoji from '#components/UI/Twemoji';

import DiscountDetail from './DiscountDetail.tsx';
import DiscountsList from './DiscountsList.tsx';

interface DiscountsProps extends React.ComponentPropsWithoutRef<'div'> {}

const Discounts: React.FC<DiscountsProps> = () => {
  return (
    <>
      <DiscountDetail />
      <div className="hero flex flex-col min-h-screen bg-base-200 items-center justify-start w-full rounded-lg p-4 max-md:p-2 mb-4 max-md:mb-2 outline outline-1 outline-base-content/20">
        <div className="hero-content text-center min-w-96">
          <div className="max-w-xl ">
            <div className="mb-4 max-md:mb-2">
              <Twemoji
                className="fill-current w-16 h-16 md:w-24 md:h-24"
                emojiClassName="w-16 h-16 md:w-24 md:h-24"
                emoji="🏷️"
              />
            </div>
            <h1 className="text-5xl max-md:text-3xl font-bold mb-2 max-md:mb-1">
              Udemy Discount Checker
            </h1>
            <p className="text-xl max-md:text-xs text-center py-2 md:py-4">
              Get the latest Udemy discount status in your region. <br />
              Status updates every hour from an unofficial API. <br />
              Learn more about{' '}
              <a
                className="link link-hover"
                href="https://cudm.beerjoa.dev/api-docs"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="divider place-content-center my-[10px]" />
        <DiscountsList />
      </div>
    </>
  );
};

export default Discounts;
