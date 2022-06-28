import { Container } from './container';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen">
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  );
};
