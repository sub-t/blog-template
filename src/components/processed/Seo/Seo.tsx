import { DefaultSeo } from 'next-seo';

export const Seo = () => {
  const rootPath = process.env.NEXT_PUBLIC_ROOT_URL as string;
  const imageURL = rootPath + '/assets/author.png';

  return (
    <>
      <DefaultSeo
        defaultTitle="blog"
        description="blog"
        openGraph={{
          type: 'website',
          title: 'blog',
          description: 'blog',
          site_name: 'blog',
          url: rootPath,
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
          {
            rel: 'icon',
            href: `${rootPath}/favicon.ico`,
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${rootPath}/favicons/apple-touch-icon-180x180.png`,
          },
        ]}
      />
    </>
  );
};
