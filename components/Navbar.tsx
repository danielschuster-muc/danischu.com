"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  name: string;
  url: string;
};

const links: NavLink[] = [
  { name: "About", url: "/#about" },
  { name: "Work", url: "/#work" },
  { name: "Tools", url: "/#tools" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isSolid, setIsSolid] = useState<boolean>(false);

  useEffect(() => {
    setIsSolid(window.pageYOffset > 0);

    const handleScroll = () => {
      setIsSolid(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 flex flex-wrap items-center justify-between p-5 ${
        isSolid
          ? "bg-gradient-to-tr from-[#eef5ff] to-[#f9ffeb] opacity-95 shadow filter backdrop-blur-xl dark:from-[#141E30] dark:to-[#2a5298]"
          : ""
      }`}
    >
      <div className="mr-6 flex flex-shrink-0 items-center">
        <span className="text-xl font-semibold tracking-tight">
          <Link href="/">Daniel Schuster</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2"
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
        } flex-grow-1 block w-full lg:flex lg:w-auto lg:items-center`}
      >
        <div className="text-sm lg:flex-grow">
          {links.map((link) => (
            <a
              key={link.name}
              className="mt-4 ml-4 block lg:mt-0 lg:inline-block"
              href={link.url}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
