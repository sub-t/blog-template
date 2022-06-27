import { DefaultSeo } from 'next-seo';
import { defaultSeo } from 'next-seo.config';
import { AppProps } from 'next/app';
import { useRoutePath } from '@/lib/routePath';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const path = useRoutePath();

  return (
    <>
      <DefaultSeo {...defaultSeo(path)} />
      <Component {...pageProps} />
    </>
  );
}
