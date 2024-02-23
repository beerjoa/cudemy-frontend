import { DateTime } from 'luxon';

import Card from '#components/UI/Card.tsx';
import {
  TDetailDiscountInfo,
  TGetDiscountDataResult,
} from '#types/Discount.ts';
import { getCountryCodeFromTitle, formatDateTime } from '#utils/formatting.ts';

interface DiscountItemProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  description: string;
  updatedAt: string;
  result: TGetDiscountDataResult;
  onOpenDetail: (detailDiscountInfo: TDetailDiscountInfo) => void;
}

type TStatusColor = 'gray' | 'green' | 'red';

const DiscountItem: React.FC<DiscountItemProps> = ({
  title,
  description,
  updatedAt,
  result: { discountStatus, startedAt, endedAt },
  onOpenDetail,
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
    if (!onOpenDetail) return;

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
    onOpenDetail(detailDiscountInfo);
  };

  return (
    <Card
      title={`${countryFlag} ${countryName} / ${countryCode}`}
      description={`📝 ${updatedDescription}`}
      updatedAt={`⏰ ${formattedDateTime}`}
      color={color}
      buttonLabel={buttonLabel}
      onOpenDetail={handleOnClickDetails}
    />
  );
};

export default DiscountItem;
