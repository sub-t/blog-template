import { useWindowSize } from './useWindowSize';

type Bp = 'sm' | 'md' | 'lg' | 'xl';

const bps = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useBreakPoint = (bp: Bp) => {
  const { width } = useWindowSize();
  return width >= bps[bp];
};
