import { memo } from 'react';
import twemoji from 'twemoji';

type TwemojiProps = {
  className?: string;
  emoji: string;
};

const Twemoji: React.FC<TwemojiProps> = memo(
  ({ className, emoji, ...props }) => {
    const combinedClassName = `_twemoji ${className || ''}`;

    return (
      <span
        className={combinedClassName}
        dangerouslySetInnerHTML={{ __html: twemoji.parse(emoji) }}
        {...props}
      />
    );
  },
);

export default Twemoji;
