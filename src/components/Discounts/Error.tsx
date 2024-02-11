import Card from '#components/UI/Card';

import { formatDateTime } from '#utils/formatting';

type ErrorProps = {
  error: string;
  onRetry?: () => void;
};

const Error: React.FC<ErrorProps> = ({ error, onRetry }) => {
  const currentDateTime = new Date().toString();

  return (
    <Card
      title="⛔️ Error"
      description={`📝 ${error || 'An error occurred while fetching the data.'}`}
      updatedAt={`⏰ ${formatDateTime(currentDateTime)}`}
      color="red"
      buttonLabel="Retry"
      onClick={onRetry}
    />
  );
};

export default Error;
