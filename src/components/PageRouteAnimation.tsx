import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

const PageRouteAnimation = ({ 
  children, 
  key 
}: { children: ReactNode, key: string }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >{children}</motion.div>
    </AnimatePresence>
  );
}

export default PageRouteAnimation;