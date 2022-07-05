import Link from 'next/link';
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
import { LinkItem } from './LinkItem';

export const Hamburger = () => {
  const lg = useBreakPoint('lg');

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
            >
              <Link href={href} passHref>
                <LinkItem>
                  {icon} {name}
                </LinkItem>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
        {lg ? null : (
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
