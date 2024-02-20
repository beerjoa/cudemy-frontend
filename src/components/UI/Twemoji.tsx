import { memo } from 'react';
import twemoji from 'twemoji';

type TwemojiProps = {
  className?: string;
  emoji: string;
  emojiClassName?: string;
};

const Twemoji: React.FC<TwemojiProps> = memo(
  ({ className, emoji, emojiClassName = 'w-4 h-4', ...props }) => {
    const combinedClassName = `_twemoji ${className || ''}`;
    return (
      <span
        className={combinedClassName}
        dangerouslySetInnerHTML={{
          __html: twemoji.parse(emoji, {
            className: emojiClassName,
          }),
        }}
        {...props}
      />
    );
  },
);

export default Twemoji;
