import Link from "next/link";
import { ReactNode, useState } from "react";
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
	const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
		setToggle(false);
  };

  const navLinks = (
		<>
			<NavLink href="/" closeMenu={closeMenu}>
				/
			</NavLink>
			<NavLink href="/about" closeMenu={closeMenu}>
				/about
			</NavLink>
		</>
	);

  return (
    <div className="mx-auto max-w-4xl py-10 px-5">
      <div className="hidden items-center space-x-2 sm:flex">
        <nav className="flex-1">
          <ul className="flex space-x-4">{navLinks}</ul>
        </nav>
      </div>
			<div className="sticky top-0 z-20 overflow-hidden sm:hidden">
				<button
					type="button"
					className="relative z-50 block px-2 text-neutral-400 transition-all focus:ring"
					onClick={() => setToggle(!toggle)}
				>
					<Hamburger 
						size={20}
						color="currentColor"
						toggled={toggle}
					/>
				</button>
			</div>
			<AnimatePresence>
				{toggle && (
					<motion.div
						initial={{opacity: 0, y: -10}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0}}
						className="fixed inset-0 z-10 space-y-2 bg-white py-24 px-8 dark:bg-neutral-900 sm:hidden"
					>
						<h1 className="text-4xl font-bold mt-4">Menu.</h1>

						<ul className="grid grid-cols-1 gap-2">{navLinks}</ul>
					</motion.div>
				)}
			</AnimatePresence>
    </div>
  );
}

export default Header;

const navlinkClassname = 
	'block py-3 font-mono text-lg dark:hover:text-white no-underline dark:sm:hover:bg-white/10 rounded-md sm:inline-block sm:px-5 sm:text-sm sm:font-normal sm:bg-white/0 sm:hover:bg-neutral-900/5 sm:rounded-full';

function NavLink(props: {
	children: ReactNode;
	href: string;
	closeMenu?: () => void;
}) {
	return (
		<li className="shrink-0">
			<Link
				href={props.href}
				className={navlinkClassname}
				onClick={props.closeMenu}
			>
				{props.children}
			</Link>
		</li>
	);
}
