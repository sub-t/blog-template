import { DefaultSeo } from 'next-seo';
import { defaultSeo } from 'next-seo.config';
import { AppProps } from 'next/app';
import { Layout } from '@/components/pages/app';
import { useRoutePath } from '@/hooks/useRoutePath';
import '@/styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const path = useRoutePath();

  return (
    <Layout>
      <DefaultSeo {...defaultSeo(path)} />
      <Component {...pageProps} />
    </Layout>
  );
}
