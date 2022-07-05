import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiMenu4Line } from 'react-icons/ri';
import { Toc } from '@/components/app/Toc';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/common/DropdownMenu';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { links } from '../config/links';

export const Hamburger = () => {
  const lg = useBreakPoint('lg');
  const post = useRouter().pathname.split('/')[1] === 'posts';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="icon-btn" aria-label="hamburger menu">
          <RiMenu4Line />
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
        {lg || !post ? null : (
          <div
            role="button"
            tabIndex={0}
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' }),
              )
            }
            onKeyDown={() => {}}
            className="overflow-y-auto cursor-default"
          >
            <Toc />
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
