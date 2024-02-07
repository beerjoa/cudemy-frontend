import DiscountItem from '@components/Discounts/DiscountItem';

type DiscountsListProps = any;

const DUMMY_DISCOUNTS = [
  {
    region: 'United States',
    description:
      'checking discount status for US from udemy api at 2/6/2024, 10:00:00 PM',
    discountStatus: true,
    countryCode: 'US',
  },
  {
    region: 'Canada',
    description:
      'checking discount status for CA from udemy api at 2/6/2024, 10:00:00 PM',
    discountStatus: false,
    countryCode: 'CA',
  },
  {
    region: 'Korea',
    description:
      'checking discount status for KR from udemy api at 2/6/2024, 10:00:00 PM',
    discountStatus: null,
    countryCode: 'KR',
  },
];
const DiscountsList: React.FC<DiscountsListProps> = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {DUMMY_DISCOUNTS.map((discount, index) => (
        <DiscountItem
          key={index}
          region={discount.region}
          description={discount.description}
          discountStatus={discount.discountStatus}
          countryCode={discount.countryCode}
        />
      ))}
    </div>
  );
};

export default DiscountsList;
