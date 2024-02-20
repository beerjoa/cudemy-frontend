import { useState, useEffect } from 'react';

import { Theme } from '#types/hooks';

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as Theme)
      : 'light',
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme') as Theme;

    document
      .querySelector<HTMLElement>('html')!
      .setAttribute('data-theme', localTheme);
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useDarkMode;
