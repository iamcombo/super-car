import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useToggle } from "@/hooks";
import { navLinks } from "@/constants";

import NavLink from "./NavLink";
import CurrentPlayingMusic from "./CurrentPlayingMusic";

const Header = () => {
  const toggle = useToggle();

  const _navLinks = navLinks.map((i, k) => (
    <NavLink key={k} href={i.route} closeMenu={toggle.toggleOff}>
      {i.name}
    </NavLink>
  ));

  return (
    <div className="mx-auto max-w-3xl py-10 px-8 md:px-0">
      <div className="hidden items-center space-x-2 sm:flex">
        <nav className="flex-1">
          <ul className="flex space-x-4">{_navLinks}</ul>
        </nav>
        <CurrentPlayingMusic />
      </div>
      <div className="sticky top-0 z-20 overflow-hidden sm:hidden">
        <div className="flex justify-between">
          <button
            type="button"
            className="relative z-50 block px-2 text-neutral-400 transition-all focus:ring"
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
            className="fixed inset-0 z-10 space-y-2 bg-white py-24 px-8 dark:bg-neutral-900 sm:hidden"
          >
            <h1 className="text-4xl font-bold mt-4">Menu.</h1>

            <ul className="grid grid-cols-1 gap-2">{_navLinks}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
