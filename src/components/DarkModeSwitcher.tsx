import Button, { ButtonProps } from '#components/UI/Button';
import Twemoji from '#components/UI/Twemoji';
import useDarkMode from '#hooks/useDarkMode';

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
    <Button className="btn btn-square btn-ghost btn-md max-md:btn-sm mr-2">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          onChange={handleThemeChange}
          checked={theme === 'light' ? false : true}
        />
        <Twemoji
          className="swap-on fill-current"
          emojiClassName="w-6 h-6 md:w-10 md:h-10"
          emoji="🌞"
        />
        <Twemoji
          className="swap-off fill-current"
          emojiClassName="w-6 h-6 md:w-10 md:h-10"
          emoji="🌜"
        />
      </label>
    </Button>
  );
};

export default DarkModeSwitcher;
