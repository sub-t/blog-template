import { Portal } from '@radix-ui/react-portal';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { cn } from '@/lib/cn';
import { Hamburger } from '../Hamburger';

type Props = {
  main: React.ReactElement;
  aside?: React.ReactNode;
  hamburgerMenu?: React.ReactNode;
  className?: string;
};

export const MainLayout: React.VFC<Props> = ({
  main,
  aside,
  hamburgerMenu,
  className,
}) => {
  const lg = useBreakPoint('lg');

  return (
    <div className={cn(className, 'grid grid-cols-1 lg:grid-cols-3 gap-10')}>
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
