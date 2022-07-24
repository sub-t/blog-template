import { Link } from '@/components/common/Link';

const View = () => (
  <div className="vstack items-center p-8 bg-primary-1">
    <p className="mb-4 text-sm md:text-base font-bold uppercase text-accent-1">
      That’s a 404
    </p>
    <h1 className="mb-2 text-2xl md:text-3xl font-bold text-primary-1">
      Page not found
    </h1>

    <p className="mb-12 text-gray-500 dark:text-gray-300 md:text-lg">
      The page you’re looking for doesn’t exist.
    </p>

    <Link href="/" passHref>
      <a className="px-10 button">Go home</a>
    </Link>
  </div>
);

export default View;
