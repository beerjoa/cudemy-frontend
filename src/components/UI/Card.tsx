import Button from '#components/UI/Button';
import Twemoji from '#components/UI/Twemoji';

type CardProps = {
  title: string;
  description: string;
  updatedAt: string;
  color: string;
  buttonLabel?: string;
  onClick?: () => void;
};

const colorVariants: any = {
  gray: {
    itemClass: 'bg-gray-200 dark:bg-gray-700 hover:scale-95',
    buttonClass:
      'bg-gray-500 hover:bg-gray-600 focus:shadow-outline focus:outline-none',
  },
  green: {
    itemClass: 'bg-green-200 dark:bg-green-700 hover:scale-105',
    buttonClass:
      'bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none',
  },
  red: {
    itemClass: 'bg-red-200 dark:bg-red-700 hover:scale-105',
    buttonClass:
      'bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none',
  },
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  updatedAt,
  color,
  buttonLabel,
  onClick,
}) => {
  const { itemClass, buttonClass } = colorVariants[color];

  const combinedItemClass = `w-full max-w-sm rounded-md overflow-hidden shadow-lg p-6 transform transition-transform duration-500 ${itemClass}`;
  const combinedButtonClass = `w-full inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${buttonClass}`;

  return (
    <div className={combinedItemClass}>
      <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 rounded h-8">
        <Twemoji emoji={title} />
      </h2>
      <div className="text-gray-700 dark:text-gray-300 text-base mb-2 rounded">
        <p className="h-16 mb-2">
          <Twemoji className="line-clamp-3" emoji={description} />
        </p>
        <time className="h-8">
          <Twemoji emoji={updatedAt} />
        </time>
      </div>
      <Button
        className={combinedButtonClass}
        disabled={!buttonLabel}
        onClick={onClick}
      >
        {buttonLabel || '-'}
      </Button>
    </div>
  );
};

export default Card;
