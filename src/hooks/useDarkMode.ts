import { useCallback, useEffect, useState } from 'react';

type UseDarkMode = () => {
  dark: boolean;
  toggle: () => void;
};

export const useDarkMode: UseDarkMode = () => {
  const [dark, setDark] = useState(false);
  const toggle = useCallback(() => setDark((state) => !state), []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return { dark, toggle };
};
