import { Container } from '../../../common/Container';
import { Footer } from '../../../features/Footer';
import { Header } from '../../../features/Header';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen vstack gap-10 bg-global">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
