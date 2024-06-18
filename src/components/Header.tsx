'use client';

import { navbarItems } from '@/constrants';
import { useToggle } from '@/hooks';
import { AnimatePresence, motion } from 'framer-motion';

import NavLink from './nav-link';
import CurrentPlayingMusic from './current-playing-music';
import Hamburger from 'hamburger-react';

export const HeaderComponent = () => {
  const toggle = useToggle();

  const navLinks = navbarItems.map((i, k) => (
    <NavLink key={k} href={i.route} closeMenu={toggle.toggleOff}>
      {i.name}
    </NavLink>
  ));

  return (
    <div className="mx-auto max-w-2xl px-8 py-10 md:px-0">
      <div className="hidden items-center space-x-2 sm:flex">
        <nav className="flex-1">
          <ul className="flex space-x-4">{navLinks}</ul>
        </nav>
        <CurrentPlayingMusic />
      </div>
      <div className="sticky top-0 z-20 overflow-hidden sm:hidden">
        <div className="flex justify-between">
          <button
            type="button"
            className="relative z-50 ml-[-12px] block text-neutral-400 transition-all focus:ring"
            onClick={() => toggle.toggle()}
          >
            <Hamburger size={20} color="currentColor" toggled={toggle.isOn} />
          </button>
          <CurrentPlayingMusic />
        </div>
      </div>
      <AnimatePresence>
        {toggle.isOn && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 space-y-2 bg-neutral-900 px-8 py-24 sm:hidden"
          >
            <h1 className="mt-4 text-4xl font-bold">Menu.</h1>
            <ul className="grid grid-cols-1 gap-2">{navLinks}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
