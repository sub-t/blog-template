import React from 'react';
import { Slot } from '@radix-ui/react-slot';

export const LinkItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ children, ...props }, forwardedRef) => (
  <Slot {...props}>
    <a
      ref={forwardedRef}
      className="px-5 py-2 text-gray-800 dark:text-white capitalize select-none cursor-pointer"
    >
      {children}
    </a>
  </Slot>
));

LinkItem.displayName = 'Link';
