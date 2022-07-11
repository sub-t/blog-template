import { useCallback, useEffect, useState } from 'react';

type UseDarkMode = () => {
  isDarkMode: boolean;
  toggle: (isDark?: boolean) => void;
};

export const useDarkMode: UseDarkMode = () => {
  const [isDarkMode, toggleTheme] = useState(false);
  const toggle = useCallback(() => toggleTheme((state) => !state), []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggle };
};
