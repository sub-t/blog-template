import { DefaultSeoProps } from 'next-seo';

export const defaultSeo = (path: string): DefaultSeoProps => ({
  defaultTitle: 'blog',
  titleTemplate: '%s | blog',
  description: 'blog',
  canonical: process.env.NEXT_PUBLIC_ROOT_URL,
  openGraph: {
    title: 'blog',
    description: 'blog',
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_ROOT_URL,
    site_name: 'blog',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { httpEquiv: 'x-ua-compatible', content: 'IE=edge' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'application-name', content: 'blog' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#000' },
    { name: 'apple-mobile-web-app-title', content: 'blog' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'theme-color', content: '#000' },
  ],
  additionalLinkTags: [
    { rel: 'icon', href: `${path}/favicon.ico` },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `${path}/favicons/apple-touch-icon-180x180.png`,
    },
  ],
});
