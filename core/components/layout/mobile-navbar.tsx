"use client";

import { useToggle } from "@/core/hooks";
import { Divide as Hamburger } from "hamburger-react";
import { CurrentPlayingMusic } from "../../../feature/spotify/current-playing-music";
import { AnimatePresence, motion } from "motion/react";
import { navbarItems } from "@/core/constants";
import { NavLink } from "./nav-link";
import { ICurrentPlayingProp } from "@/feature/spotify";

export const MobileNavbar = ({ nowPlaying }: ICurrentPlayingProp) => {
  const toggle = useToggle();

  const navLinks = navbarItems.map((i, k) => (
    <NavLink key={k} href={i.route} closeMenu={toggle.toggleOff}>
      {i.name}
    </NavLink>
  ));

  return (
    <div>
      <div className="sticky top-0 z-20 overflow-hidden sm:hidden">
        <div className="flex justify-between">
          <button
            type="button"
            aria-label="hamburger button"
            className="relative z-50 ml-[-12px] block text-neutral-400 transition-all focus:ring"
            onClick={() => toggle.toggle()}
          >
            <Hamburger
              label="hamburger button"
              size={20}
              color="currentColor"
              toggled={toggle.isOn}
            />
          </button>
          <CurrentPlayingMusic {...{ nowPlaying }} />
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
