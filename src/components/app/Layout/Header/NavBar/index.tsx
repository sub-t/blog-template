import Link from 'next/link';
import { links } from '../config/links';
import { LinkItem } from './LinkItem';

export const NavBar = () => {
  return (
    <>
      {links.map(({ name, href }) => (
        <Link key={name} href={href} passHref>
          <LinkItem>{name}</LinkItem>
        </Link>
      ))}
    </>
  );
};
