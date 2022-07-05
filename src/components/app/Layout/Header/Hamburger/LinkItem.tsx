import React from 'react';
import { Slot } from '@radix-ui/react-slot';

export const LinkItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ children, ...props }, forwardedRef) => (
  <Slot {...props}>
    <a
      ref={forwardedRef}
      className="hstack gap-3 py-3 px-6 text-md text-base-style hover:text-indigo-600 hover:dark:text-indigo-400 capitalize select-none cursor-pointer"
    >
      {children}
    </a>
  </Slot>
));

LinkItem.displayName = 'Link';
