import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/common/Dialog';
import { links } from '../config/links';
import { LinkItem } from './LinkItem';

export const Hamburger = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        className="text-gray-800 dark:text-white p-4"
        aria-label="hamburger menu"
      >
        <HamburgerMenuIcon />
      </button>
    </DialogTrigger>
    <DialogContent className="w-4/5 h-4/5 flex flex-col justify-center items-center gap-3 bg-white dark:bg-slate-900 rounded-lg">
      {links.map(({ name, href }) => (
        <NextLink key={name} href={href} passHref>
          <LinkItem>{name}</LinkItem>
        </NextLink>
      ))}
    </DialogContent>
  </Dialog>
);
