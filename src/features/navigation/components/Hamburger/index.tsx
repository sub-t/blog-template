import Link from 'next/link';
import { RiMenu4Line } from 'react-icons/ri';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/common/DropdownMenu';
import { links } from '../../config/links';

type Props = {
  children?: React.ReactNode;
};

export const Hamburger: React.VFC<Props> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="icon-btn rounded-full bg-white dark:bg-black shadow-xl"
          aria-label="hamburger menu"
        >
          <RiMenu4Line size={28} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        collisionTolerance={16}
        className="vstack gap-2 max-h-80 bg-base-style rounded-lg shadow-lg"
      >
        <div className="center">
          {links.map(({ name, href, icon }) => (
            <DropdownMenuItem
              key={name}
              onClick={() =>
                document.dispatchEvent(
                  new KeyboardEvent('keydown', { key: 'Escape' }),
                )
              }
              className="text-md text-base-style hover:text-indigo-600 hover:dark:text-indigo-400 focus:text-indigo-600 focus:dark:text-indigo-400 capitalize select-none cursor-pointer"
            >
              <Link href={href} passHref>
                <a className="hstack gap-3 py-3 px-6">
                  {icon} {name}
                </a>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
