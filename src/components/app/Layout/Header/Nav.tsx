import NextLink from 'next/link';
import { links } from './config/links';
import { Link } from './Link';

export const Nav = () => {
  return (
    <div className="hidden lg:flex">
      {links.map(({ name, href }) => (
        <NextLink key={name} href={href} passHref>
          <Link>{name}</Link>
        </NextLink>
      ))}
    </div>
  );
};
