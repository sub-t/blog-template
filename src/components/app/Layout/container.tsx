import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="container xl:max-w-7xl mx-auto px-5">{children}</div>;
};
