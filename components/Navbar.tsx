"use client";

import Link from "next/link";
import React, { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  name: string;
  url: string;
};

const links: NavLink[] = [
  { name: "About", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Tools", url: "#tools" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-50 w-full bg-gray-100 dark:bg-gray-800 p-5">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">Daniel Schuster</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <FiX className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <FiMenu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full block flex-grow-1 lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            {links.map((link) => (
              <Link
                key={link.name}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 ml-4"
                href={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
