import React from 'react';
import Link from 'next/link';
import { FiSun } from 'react-icons/fi';
import { Container } from '@/components/common/Container';
import { useDarkMode } from '@/hooks/useDarkMode';
import { NavBar } from './NavBar';

export const Header = () => {
  const { toggle } = useDarkMode();

  return (
    <Container className="sticky top-0 z-10 py-3 backdrop-blur-sm">
      <nav className="hstack justify-between">
        <Link href="/" passHref>
          <a className="select-none text-primary-1 text-2xl md:text-3xl font-bold">
            Blog
          </a>
        </Link>

        <div className="hidden lg:flex">
          <NavBar />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="icon-btn"
            aria-label="toggle theme"
            onClick={() => toggle()}
          >
            <FiSun />
          </button>
        </div>
      </nav>
    </Container>
  );
};
