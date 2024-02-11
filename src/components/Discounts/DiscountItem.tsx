import Card from '#components/UI/Card';

import { IGetDiscountData } from '#types/Discount';
import { getCountryCodeFromTitle, formatDateTime } from '#utils/formatting';

interface DiscountItemProps extends IGetDiscountData {
  onClick?: () => void;
}

const DiscountItem: React.FC<DiscountItemProps> = ({
  title,
  description,
  updatedAt,
  result: { discountStatus },
  onClick,
}) => {
  const { countryCode, countryName, countryFlag } =
    getCountryCodeFromTitle(title);
  let color = 'gray';
  let updatedDescription = description;
  let buttonLabel;

  if (discountStatus !== null) {
    color = discountStatus ? 'green' : 'red';
    updatedDescription = `Checked discount status for ${countryCode} from Udemy API`;
    buttonLabel = 'Check Status';
  }

  return (
    <Card
      title={`${countryFlag} ${countryName} / ${countryCode}`}
      description={`📝 ${updatedDescription}`}
      updatedAt={`⏰ ${formatDateTime(updatedAt)}`}
      color={color}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />
  );
};

export default DiscountItem;
