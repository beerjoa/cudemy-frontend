import { memo } from 'react';
import twemoji from 'twemoji';

interface TwemojiProps extends React.ComponentPropsWithoutRef<'span'> {
  className?: string;
  emoji: string;
  emojiClassName?: string;
}

const Twemoji: React.FC<TwemojiProps> = memo(
  ({
    className,
    emoji,
    emojiClassName = 'size-4 align-[-0.1em]',
    ...props
  }) => {
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
