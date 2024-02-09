import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem('theme') as Theme,
  );
  const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    if (colorTheme) root.classList.remove(colorTheme);
    if (theme) root.classList.add(theme);

    if (theme) localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
};

export default useDarkMode;
