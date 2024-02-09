import Button from '@components/UI/Button';

type DiscountItemProps = {
  region: string;
  description: string;
  discountStatus?: boolean | null;
  countryCode: string;
};

const colorVariants: any = {
  gray: {
    itemClass:
      'basis-5/6 lg:basis-1/3 max-w-md md:max-w-xs rounded-md overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 p-6 transform transition-transform duration-500 hover:scale-105',
    buttonClass:
      'mt-4 inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-500 hover:bg-gray-600 focus:shadow-outline focus:outline-none',
  },
  green: {
    itemClass:
      'basis-5/6 lg:basis-1/3 max-w-md md:max-w-xs rounded-md overflow-hidden shadow-lg bg-green-200 dark:bg-green-700 p-6 transform transition-transform duration-500 hover:scale-105',
    buttonClass:
      'mt-4 inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none',
  },
  red: {
    itemClass:
      'basis-5/6 lg:basis-1/3 max-w-md md:max-w-xs rounded-md overflow-hidden shadow-lg bg-red-200 dark:bg-red-700 p-6 transform transition-transform duration-500 hover:scale-105',
    buttonClass:
      'mt-4 inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none',
  },
};

const DiscountItem: React.FC<DiscountItemProps> = ({
  region,
  description,
  discountStatus,
  countryCode,
}: DiscountItemProps) => {
  let color = 'gray';
  if (discountStatus !== null) {
    color = discountStatus ? 'green' : 'red';
  }

  const { itemClass, buttonClass } = colorVariants[color];

  return (
    <div className={itemClass}>
      <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">
        {region} / {countryCode}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        {description}
      </p>
      <Button className={buttonClass} disabled={discountStatus === null}>
        Button
      </Button>
    </div>
  );
};

export default DiscountItem;
