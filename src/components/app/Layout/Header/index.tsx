import React from 'react';
import Link from 'next/link';
import { FiSun } from 'react-icons/fi';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Container } from '../../Container';
import { Hamburger } from './Hamburger';
import { Nav } from './NavBar';

export const Header = () => {
  const { toggle } = useDarkMode();

  return (
    <Container className="sticky top-0 z-10 py-3 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <Link href="/" passHref>
          <a className="select-none text-base-style text-3xl font-bold">Blog</a>
        </Link>

        <Nav />

        <div className="flex gap-4">
          <button
            type="button"
            className="text-base-style p-4"
            aria-label="toggle theme"
            onClick={() => toggle()}
          >
            <FiSun />
          </button>

          <div className="flex lg:hidden">
            <Hamburger />
          </div>
        </div>
      </nav>
    </Container>
  );
};
