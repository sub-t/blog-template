import { AppProps } from 'next/app';
import '@/styles/index.css';
import { Container } from '@/components/features/app/Container';
import { Footer } from '@/components/features/app/Footer';
import { Header } from '@/components/features/app/Header';
import { Seo } from '@/components/features/app/Seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />

      <div className="min-h-screen vstack gap-10 bg-global">
        <Header />
        <Container className="px-0 py-6 sm:p-6">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </div>
    </>
  );
}
