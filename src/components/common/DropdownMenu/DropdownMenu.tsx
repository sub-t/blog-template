import React, { useState } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import { AnimatePresence } from 'framer-motion';
import { AnimationConfig, Motion } from '../Motion';

const animationConfig: AnimationConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

type Props = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
> & {
  trigger?: React.ReactNode;
};

export const DropdownMenu = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  Props
>(({ children, trigger, ...props }, forwardedRef) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenuPrimitive.Root onOpenChange={(open) => setOpen(open)}>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <AnimatePresence>
        {open && (
          <Motion {...animationConfig}>
            <Slot {...props}>
              <DropdownMenuPrimitive.Content
                collisionPadding={16}
                ref={forwardedRef}
                forceMount
              >
                {children}
              </DropdownMenuPrimitive.Content>
            </Slot>
          </Motion>
        )}
      </AnimatePresence>
    </DropdownMenuPrimitive.Root>
  );
});

DropdownMenu.displayName = 'DropdownMenu';

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
