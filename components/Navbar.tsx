"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  name: string;
  url: string;
};

const links: NavLink[] = [
  { name: "About", url: "#about" },
  { name: "Work", url: "#work" },
  { name: "Tools", url: "#tools" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isSolid, setIsSolid] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const section = document.querySelector<HTMLElement>(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`p-5 ${
        isSolid ? "bg-gray-200 dark:bg-gray-800" : "bg-transparent"
      }`}
    >
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
              <button
                key={link.name}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 ml-4"
                // href={link.url}
                onClick={(e) => scrollToSection(link.url)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
