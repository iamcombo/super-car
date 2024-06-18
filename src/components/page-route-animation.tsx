'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

export const PageRouteAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
