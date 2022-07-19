import { Link } from '@/components/common/Link';
import { ContentLayout } from '@/components/features/app/Layout';
import { SITE_NAME } from '@/config/app';
import { sns } from '@/config/sns';

export const Footer = () => {
  return (
    <footer>
      <ContentLayout className="p-10 center bg-neutral-800">
        <div className="vstack items-center gap-4">
          <div className="flex gap-4">
            {sns.map(({ href, icon }) => (
              <Link key={href} href={href} passHref>
                <a className="text-neutral-200 hover:text-neutral-500 active:text-gray-600 transition duration-100">
                  {icon}
                </a>
              </Link>
            ))}
          </div>
          <div className="text-neutral-200 text-sm text-center">
            &copy; 2022 - {SITE_NAME}
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
};
