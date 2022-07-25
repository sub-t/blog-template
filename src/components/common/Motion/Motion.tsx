import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

export const Motion = motion(Slot);

export type AnimationConfig = React.ComponentProps<typeof Motion>;
