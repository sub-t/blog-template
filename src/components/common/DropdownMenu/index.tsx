import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from './store';

const MotionSlot = motion(Slot);

const animationConfig: React.ComponentProps<typeof MotionSlot> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

type DropdownMenuProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Root
>;

export const DropdownMenu: React.VFC<DropdownMenuProps> = ({
  children,
  ...props
}) => {
  const setOpen = useStore((state) => state.setOpen);
  return (
    <DropdownMenuPrimitive.Root
      {...props}
      onOpenChange={(open) => setOpen(open)}
    >
      {children}
    </DropdownMenuPrimitive.Root>
  );
};

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ children, ...props }, forwardedRef) => {
  const { open } = useStore((state) => state);

  return (
    <AnimatePresence>
      {open ? (
        <MotionSlot {...animationConfig}>
          <Slot {...props}>
            <DropdownMenuPrimitive.Content ref={forwardedRef} forceMount>
              {children}
            </DropdownMenuPrimitive.Content>
          </Slot>
        </MotionSlot>
      ) : null}
    </AnimatePresence>
  );
});

DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
