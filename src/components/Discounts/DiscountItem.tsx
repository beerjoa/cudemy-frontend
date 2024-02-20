import { DateTime } from 'luxon';

import Card from '#components/UI/Card.tsx';
import { TDetailDiscountInfo, TGetDiscountData } from '#types/Discount.ts';
import { getCountryCodeFromTitle, formatDateTime } from '#utils/formatting.ts';

type DiscountItemProps = React.HTMLAttributes<HTMLDivElement> &
  TGetDiscountData & {
    onClick?: (detailDiscountInfo: TDetailDiscountInfo) => void;
  };

type TStatusColor = 'gray' | 'green' | 'red';

const DiscountItem: React.FC<DiscountItemProps> = ({
  title,
  description,
  updatedAt,
  result: { discountStatus, startedAt, endedAt },
  onClick,
}) => {
  const { countryCode, countryName, countryFlag } =
    getCountryCodeFromTitle(title);
  let color: TStatusColor = 'gray';
  let updatedDescription = description;

  const formattedDateTime = formatDateTime(updatedAt, DateTime.DATETIME_FULL);

  let buttonLabel;

  if (discountStatus !== null) {
    color = discountStatus ? 'green' : 'red';
    updatedDescription = `Checked discount status for ${countryCode} from Udemy API`;
    buttonLabel = 'Check Status';
  }

  const handleOnClickDetails = () => {
    if (!onClick) return;

    const detailDiscountInfo: TDetailDiscountInfo = {
      countryCode,
      countryName,
      countryFlag,
      description: updatedDescription,
      updatedAt,
      discountStatus,
      startedAt,
      endedAt,
    };
    onClick(detailDiscountInfo);
  };

  return (
    <Card
      title={`${countryFlag} ${countryName} / ${countryCode}`}
      description={`📝 ${updatedDescription}`}
      updatedAt={`⏰ ${formattedDateTime}`}
      color={color}
      buttonLabel={buttonLabel}
      onClick={handleOnClickDetails}
    />
  );
};

export default DiscountItem;
