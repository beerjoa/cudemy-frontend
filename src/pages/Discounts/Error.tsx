import Card from '#pages/Discounts/DiscountItemCard';

import { formatDateTime } from '#utils/formatting.ts';
import { DateTime } from 'luxon';

interface ErrorProps extends React.ComponentPropsWithoutRef<'div'> {
  error: string;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, onRetry }) => {
  const currentDateTime = new Date().toString();

  return (
    <Card
      title="⛔️ Error"
      description={`📝 ${error || 'An error occurred while fetching the data.'}`}
      updatedAt={`⏰ ${formatDateTime(currentDateTime, DateTime.TIME_WITH_SHORT_OFFSET)}`}
      color="red"
      buttonLabel="Retry"
      onOpenDetail={onRetry}
    />
  );
};

export default Error;
