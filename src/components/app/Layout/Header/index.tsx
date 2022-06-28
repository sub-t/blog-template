import React from 'react';
import { Container } from '../../Container';
import { Nav } from './Nav';

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Container>
      <nav className="lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Blog
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <Nav />
      </nav>
    </Container>
  );
};
