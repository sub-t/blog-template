import { useRouter } from 'next/router';

export const useRoutePath = () => {
  const router = useRouter();
  const depth = router.pathname.split('/').filter(Boolean).length;
  const cd = depth ? new Array<string>(depth).fill('..').join('/') : '.';

  return cd;
};
