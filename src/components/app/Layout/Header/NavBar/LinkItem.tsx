import React from 'react';
import { Slot } from '@radix-ui/react-slot';

export const LinkItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ children, ...props }, forwardedRef) => (
  <Slot {...props}>
    <a
      ref={forwardedRef}
      className="px-5 py-2 text-base-style capitalize select-none cursor-pointer"
    >
      {children}
    </a>
  </Slot>
));

LinkItem.displayName = 'Link';
