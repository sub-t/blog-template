import { cn } from '@/lib/cn';

const variants = {
  default: '',
  arrow: '',
  ellipsis: 'w-auto px-1',
};

type Props = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  active?: boolean;
};

export const StyledCell: React.VFC<Props> = ({
  children,
  variant = 'default',
  active,
}) => (
  <div
    className={cn(
      'center w-8 h-8 rounded-full text-lg',
      variants[variant],
      active ? 'bg-teal-700 text-white' : 'text-teal-800',
    )}
  >
    {children}
  </div>
);
