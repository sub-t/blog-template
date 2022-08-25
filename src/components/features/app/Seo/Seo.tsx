import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { useRootPath } from '@/hooks/useRootPath';
import { joinPath } from '@/lib/joinPath';
import { SITE_NAME } from '@/config/app';

export const Seo = () => {
  const rootPath = useRootPath();
  const imageURL = joinPath(ROOT_URL, '/assets/author.png');

  return (
    <>
      <DefaultSeo
        defaultTitle={SITE_NAME}
        description="blog"
        openGraph={{
          type: 'website',
          title: SITE_NAME,
          description: 'blog',
          site_name: SITE_NAME,
          url: ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          { rel: 'icon', href: `${rootPath}/favicon.ico` },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${rootPath}/favicons/favicon-16x16.png`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${rootPath}/favicons/favicon-32x32.png`,
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${rootPath}/favicons/apple-touch-icon-180x180.png`,
          },
          {
            rel: 'mask-icon',
            href: `${rootPath}/favicons/safari-pinned-tab.svg`,
            color: '#5bbad5',
          },
        ]}
      />
    </>
  );
};
