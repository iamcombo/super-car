import { navbarItems } from "@/core/constants";

import { NavLink } from "./nav-link";
import { CurrentPlayingMusic } from "../music-playing/current-playing-music";
import { MobileNavbar } from "./mobile-navbar";

export const HeaderComponent = () => {
  const navLinks = navbarItems.map((i, k) => (
    <NavLink key={k} href={i.route}>
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

      <MobileNavbar />
    </div>
  );
};
