import Link from 'next/link';
import { links } from '../../../../config/links';

export const NavBar = () => {
  return (
    <>
      {links.map(({ name, href }) => (
        <Link key={name} href={href} passHref>
          <a className="px-5 py-2 text-primary-1 capitalize select-none cursor-pointer">
            {name}
          </a>
        </Link>
      ))}
    </>
  );
};
