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
  disabled?: boolean;
};

export const StyledCell: React.VFC<Props> = ({
  children,
  variant = 'default',
  active,
  disabled,
}) => (
  <div
    className={cn(
      variants[variant],
      disabled ? 'text-neutral-300 dark:text-neutral-600 ' : '',
      active ? 'bg-teal-800 dark:bg-teal-600 text-white dark:text-white' : '',
      'center w-8 h-8 rounded-full text-lg text-accent-1',
    )}
  >
    {children}
  </div>
);
