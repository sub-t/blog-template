import { Portal } from '@radix-ui/react-portal';
import { Hamburger } from '@/components/features/app/Hamburger';
import { useBreakPoint } from '@/hooks/useBreakPoint';

type Props = {
  main: React.ReactElement;
  aside: React.ReactNode;
  hamburgerMenu?: React.ReactNode;
};

export const Contents: React.VFC<Props> = ({ main, aside, hamburgerMenu }) => {
  const lg = useBreakPoint('lg');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <main>{main}</main>
      </div>
      <aside>{aside}</aside>
      {lg || (
        <Portal>
          <div className="fixed left-8 bottom-8">
            <Hamburger>{hamburgerMenu}</Hamburger>
          </div>
        </Portal>
      )}
    </div>
  );
};
