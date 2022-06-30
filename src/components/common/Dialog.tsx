import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { AnimatePresence, motion } from 'framer-motion';
import create from 'zustand';

type State = {
  open: boolean;
  toggle: (open: boolean) => void;
};

const useStore = create<State>((set) => ({
  open: false,
  toggle: (open) => set(() => ({ open })),
}));

const MotionSlot = motion(Slot);

const animationConfig: React.ComponentProps<typeof MotionSlot> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

type DialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export const Dialog: React.VFC<DialogProps> = ({ children, ...props }) => {
  const toggle = useStore((state) => state.toggle);
  return (
    <DialogPrimitive.Root {...props} onOpenChange={(open) => toggle(open)}>
      {children}
    </DialogPrimitive.Root>
  );
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, forwardedRef) => {
  const { toggle, open } = useStore((state) => state);

  return (
    <AnimatePresence>
      {open ? (
        <DialogPrimitive.DialogPortal forceMount>
          <div className="absolute inset-0">
            <MotionSlot {...animationConfig}>
              <DialogPrimitive.Overlay
                className="fixed z-50 inset-0 bg-black/50"
                forceMount
              />
            </MotionSlot>

            <MotionSlot {...animationConfig}>
              <Slot {...props}>
                <DialogPrimitive.Content
                  className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  ref={forwardedRef}
                  forceMount
                >
                  {children}
                  <DialogPrimitive.Close
                    className="absolute top-1 right-1"
                    asChild
                  >
                    <button
                      className="text-gray-800 dark:text-white p-4"
                      type="button"
                      aria-label="close"
                      onClick={() => toggle(false)}
                    >
                      <Cross1Icon />
                    </button>
                  </DialogPrimitive.Close>
                </DialogPrimitive.Content>
              </Slot>
            </MotionSlot>
          </div>
        </DialogPrimitive.DialogPortal>
      ) : null}
    </AnimatePresence>
  );
});

DialogContent.displayName = 'DialogContent';

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
