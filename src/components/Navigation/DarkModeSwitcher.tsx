import Button, { ButtonProps } from '#components/UI/Button.tsx';
import Twemoji from '#components/UI/Twemoji.tsx';
import useDarkMode from '#hooks/useDarkMode.ts';

type DarkModeSwitcherProps = ButtonProps;

const DarkModeSwitcher: React.FC<DarkModeSwitcherProps> = () => {
  const [theme, setTheme] = useDarkMode();

  const handleThemeChange = (event: any) => {
    if (event.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button className="btn btn-square btn-ghost btn-lg max-md:btn-md mx-2">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          onChange={handleThemeChange}
          checked={theme === 'dark'}
        />
        <Twemoji
          className="swap-on fill-current"
          emojiClassName="w-6 h-6 md:w-12 md:h-12"
          emoji="🌞"
        />
        <Twemoji
          className="swap-off fill-current"
          emojiClassName="w-6 h-6 md:w-12 md:h-12"
          emoji="🌜"
        />
      </label>
    </Button>
  );
};

export default DarkModeSwitcher;
