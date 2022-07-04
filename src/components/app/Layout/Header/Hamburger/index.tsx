import Link from 'next/link';
import { RiMenu4Line } from 'react-icons/ri';
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
      <button className="icon-btn" aria-label="hamburger menu">
        <RiMenu4Line />
      </button>
    </DialogTrigger>
    <DialogContent className="w-4/5 h-4/5 flex flex-col justify-center items-center gap-3 bg-base-style rounded-lg">
      {links.map(({ name, href }) => (
        <Link key={name} href={href} passHref>
          <LinkItem>{name}</LinkItem>
        </Link>
      ))}
    </DialogContent>
  </Dialog>
);
