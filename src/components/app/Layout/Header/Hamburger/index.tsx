import Link from 'next/link';
import { RiMenu4Line } from 'react-icons/ri';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/common/DropdownMenu';
import { links } from '../config/links';
import { LinkItem } from './LinkItem';

export const Hamburger = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button className="icon-btn" aria-label="hamburger menu">
        <RiMenu4Line />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      sideOffset={8}
      collisionTolerance={16}
      className="vstack bg-base-style rounded-lg shadow-lg"
    >
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
    </DropdownMenuContent>
  </DropdownMenu>
);
