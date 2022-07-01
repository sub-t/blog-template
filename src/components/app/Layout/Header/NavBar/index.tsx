import Link from 'next/link';
import { links } from '../config/links';
import { LinkItem } from './LinkItem';

export const Nav = () => {
  return (
    <div className="hidden lg:flex">
      {links.map(({ name, href }) => (
        <Link key={name} href={href} passHref>
          <LinkItem>{name}</LinkItem>
        </Link>
      ))}
    </div>
  );
};
