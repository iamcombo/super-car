import Link from "next/link";
import { ReactNode } from "react";

const Header = () => {
  const closeMenu = () => {

  };

  const navLinks = (
		<>
			<NavLink href="/" closeMenu={closeMenu}>
				/
			</NavLink>
			<NavLink href="/about" closeMenu={closeMenu}>
				/about
			</NavLink>
			{/* <NavLink href="/talk" closeMenu={closeMenu}>
				/talk
			</NavLink> */}
		</>
	);

  return (
    <div className="mx-auto max-w-4xl py-10 px-5">
      <div className="hidden items-center space-x-2 sm:flex">
        <nav className="flex-1">
          <ul className="flex space-x-4">{navLinks}</ul>
        </nav>
      </div>
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
