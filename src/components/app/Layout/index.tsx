import { Container } from './Container';
import { Footer } from './Footer';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="min-h-screen">
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </div>
  );
};
