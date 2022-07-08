import { Container } from '../../../../components/common/Container';
import { Footer } from '../../../navigation/components/Footer';
import { Header } from '../../../navigation/components/Header';

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
