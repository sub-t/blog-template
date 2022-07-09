import { DefaultSeo } from 'next-seo';
import { defaultSeo } from 'next-seo.config';
import { AppProps } from 'next/app';
import '@/styles/index.css';
import { Container } from '@/components/common/Container';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { useRoutePath } from '@/hooks/useRoutePath';

export default function MyApp({ Component, pageProps }: AppProps) {
  const path = useRoutePath();

  return (
    <div className="min-h-screen vstack gap-10 bg-global">
      <Header />
      <Container>
        <DefaultSeo {...defaultSeo(path)} />
        <Component {...pageProps} />
      </Container>
      <Footer />
    </div>
  );
}
