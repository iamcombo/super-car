import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import { loadCursor } from '@/utils/cursor';
import PageRouteProgress from '@/utils/PageRouteProgress';

export default function App({ Component, pageProps }: AppProps) {
  PageRouteProgress();
  const ballCanvas = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
		if (typeof window === 'undefined' || !ballCanvas.current) {
			return;
		}

		return loadCursor(ballCanvas.current);
	}, []);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <main className='mx-auto max-w-3xl md:py-24 lg:py-8'>
            <Component {...pageProps} />
          </main>
        </motion.div>
      </AnimatePresence>
      {/* Cursor */}
      <div
        ref={ballCanvas}
        className="ball-transitions pointer-events-none fixed z-30 h-6 w-6 rounded-full border border-black bg-transparent opacity-0 shadow-md duration-200 dark:border-white"
      />
    </>
  )
}
