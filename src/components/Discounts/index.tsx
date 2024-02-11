import DiscountsList from '#components/Discounts/DiscountsList';

type DiscountsProps = any;

const Discounts: React.FC<DiscountsProps> = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Udemy Discount Status
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Check out the latest discounts and offers for your region.
        </p>
      </div>
      <DiscountsList />
    </>
  );
};

export default Discounts;
