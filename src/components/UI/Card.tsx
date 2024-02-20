import Button from '#components/UI/Button.tsx';
import Ping from '#components/UI/Ping.tsx';
import Twemoji from '#components/UI/Twemoji.tsx';

type CardProps = {
  title: string;
  description: string;
  updatedAt: string;
  color: 'gray' | 'green' | 'red';
  buttonLabel?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  updatedAt,
  color,
  buttonLabel,
  onClick,
}) => {
  const itemClass = color === 'gray' ? 'hover:scale-95' : 'hover:scale-105';

  const combinedItemClass = `card w-full max-w-sm outline outline-1 outline-base-content/20 bg-base-300 text-base-content overflow-hidden shadow-lg transform transition-transform duration-500 ${itemClass}`;
  const combinedButtonClass = `btn btn-sm md:text-[1.1em] text-md w-full rounded-lg inline-flex items-center justify-center tracking-wide rounded shadow-md btn-primary text-primary-content focus:shadow-outline focus:outline-none transform transition duration-200`;

  return (
    <div className={combinedItemClass}>
      <div className="card-body [--padding-card:24px]">
        <div className="card-title mb-2">
          <h2 className="text-xl font-bold rounded">
            <Twemoji emoji={title} emojiClassName="size-5 align-[-3px]" />
          </h2>
          <Ping color={color} />
        </div>
        <div className="mb-2 rounded-lg">
          <p className="h-20">
            <Twemoji className="line-clamp-3" emoji={description} />
          </p>
          <time className="">
            <Twemoji emoji={updatedAt} />
          </time>
        </div>
        <div className="card-action">
          <Button
            className={combinedButtonClass}
            disabled={!buttonLabel}
            onClick={onClick}
          >
            {buttonLabel || '-'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
