import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  name: string;
  route: string;
}> = ({ activeItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span className="hover:text-teal-500">{name}</span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("About");
    } else if (pathname === "/resume") {
      setActiveItem("Resume");
    } else setActiveItem("Projects");
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-teal-500 border-b-4 border-teal-300 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem activeItem={activeItem} name="About" route="/" />
        <NavItem activeItem={activeItem} name="Resume" route="/resume" />
        <NavItem activeItem={activeItem} name="Projects" route="/projects" />
      </div>
    </div>
  );
};

export default Navbar;
