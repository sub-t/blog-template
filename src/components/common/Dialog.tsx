import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const MotionSlot = motion(Slot);

const animationConfig: React.ComponentProps<typeof MotionSlot> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

type DialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export const Dialog: React.VFC<DialogProps> = ({ children, ...props }) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.DialogPortal>
    <div className="absolute inset-0">
      <MotionSlot {...animationConfig}>
        <DialogPrimitive.Overlay className="fixed z-50 inset-0 bg-black/50" />
      </MotionSlot>

      <MotionSlot {...animationConfig}>
        <Slot {...props}>
          <DialogPrimitive.Content
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ref={forwardedRef}
          >
            {children}
            <DialogPrimitive.Close className="absolute top-1 right-1" asChild>
              <button
                className="text-gray-800 dark:text-white p-4"
                type="button"
                aria-label="close"
              >
                <Cross1Icon />
              </button>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </Slot>
      </MotionSlot>
    </div>
  </DialogPrimitive.DialogPortal>
));

DialogContent.displayName = 'DialogContent';

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
