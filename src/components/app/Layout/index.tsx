import { Container } from '../Container';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-10 bg-base-style">
      <Header />
      <div className="min-h-screen">
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};
