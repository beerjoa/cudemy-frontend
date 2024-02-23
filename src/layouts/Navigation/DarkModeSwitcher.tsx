import Twemoji from '#components/UI/Twemoji.tsx';
import useDarkMode from '#hooks/useDarkMode.ts';

interface DarkModeSwitcherProps
  extends React.ComponentPropsWithoutRef<'button'> {}

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
    <button className="btn btn-ghost btn-square btn-lg max-md:btn-md mx-2">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          onChange={handleThemeChange}
          checked={theme === 'dark'}
        />
        <Twemoji
          className="swap-on fill-current"
          emojiClassName="w-8 h-8 md:w-12 md:h-12"
          emoji="🌞"
        />
        <Twemoji
          className="swap-off fill-current"
          emojiClassName="w-8 h-8 md:w-12 md:h-12"
          emoji="🌜"
        />
      </label>
    </button>
  );
};

export default DarkModeSwitcher;
