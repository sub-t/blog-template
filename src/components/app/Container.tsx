import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container xl:max-w-7xl mx-auto p-6">{children}</div>
    </div>
  );
};
