import { Container } from '../Container';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-12 bg-slate-50">
      <Header />
      <div className="min-h-screen">
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </div>
  );
};
