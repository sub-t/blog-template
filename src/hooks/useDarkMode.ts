import { useCallback, useEffect, useState } from 'react';

type UseDarkMode = (isDark?: boolean) => {
  isDarkMode: boolean;
  toggle: (isDark?: boolean) => void;
};

export const useDarkMode: UseDarkMode = (isInitialDark = false) => {
  const [isDarkMode, toggleTheme] = useState(isInitialDark);
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
