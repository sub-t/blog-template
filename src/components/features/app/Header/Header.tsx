import React from 'react';
import { FiSun } from 'react-icons/fi';
import { Link } from '@/components/common/Link';
import { ContentLayout } from '@/components/features/app/Layout';
import { useDarkMode } from '@/hooks/useDarkMode';
import { NavBar } from './NavBar';

export const Header = () => {
  const { toggle } = useDarkMode();

  return (
    <ContentLayout className="sticky top-0 z-10 py-3 bg-primary-1 shadow-sm">
      <nav className="hstack justify-between">
        <Link href="/" passHref>
          <a className="select-none text-primary-1 text-2xl md:text-3xl font-bold">
            Katsu30
          </a>
        </Link>

        <div className="flex gap-2">
          <NavBar />
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
    </ContentLayout>
  );
};
