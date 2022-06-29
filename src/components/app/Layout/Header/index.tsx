import React from 'react';
import { HamburgerMenuIcon, SunIcon } from '@radix-ui/react-icons';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Container } from '../../Container';
import { Nav } from './Nav';

export const Header = () => {
  const { toggle } = useDarkMode();

  return (
    <Container>
      <nav className="flex items-center justify-between">
        <div className="text-3xl font-bold text-gray-800 dark:text-white">
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
            <button
              type="button"
              className="text-gray-800 dark:text-white p-4"
              aria-label="toggle menu"
            >
              <HamburgerMenuIcon />
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
};
