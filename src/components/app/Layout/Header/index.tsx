import React from 'react';
import { SunIcon } from '@radix-ui/react-icons';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Container } from '../../Container';
import { Hamburger } from './Hamburger';
import { Nav } from './NavBar';

export const Header = () => {
  const { toggle } = useDarkMode();

  return (
    <Container className="sticky top-0 z-10 py-3 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <div className="text-gray-800 dark:text-white text-3xl font-bold">
          Blog
        </div>

        <Nav />

        <div className="flex gap-4">
          <button
            type="button"
            className="text-gray-800 dark:text-white p-4"
            aria-label="toggle theme"
            onClick={() => toggle()}
          >
            <SunIcon />
          </button>

          <div className="flex lg:hidden">
            <Hamburger />
          </div>
        </div>
      </nav>
    </Container>
  );
};
