import { useState } from 'react';

import useDarkMode from '../hooks/useDarkMode';

type DarkModeSwitcherProps = any;

const DarkModeSwitcher: React.FC<DarkModeSwitcherProps> = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false,
  );

  const toggleDarkMode: (checked: boolean) => void = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <button
      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      onClick={() => toggleDarkMode(!darkSide)}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </button>
  );
};

export default DarkModeSwitcher;
