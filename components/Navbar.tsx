"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  name: string;
  url: string;
};

const links: NavLink[] = [
  { name: "About", url: "/#about" },
  { name: "Projects", url: "/#projects" },
  { name: "Tools", url: "/#tools" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSolid, setIsSolid] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.pageYOffset > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 flex items-center justify-between p-5 ${
        isSolid ? "bg-linear-to-tr from-[#eef5ff] to-[#f9ffeb] opacity-95 shadow backdrop-blur-xl" : ""
      }`}>
      <Link
        href="/"
        className="text-xl font-semibold tracking-tight transition-all hover:scale-105 hover:text-gray-900">
        Daniel Schuster
      </Link>

      <div className="hidden items-center gap-6 text-sm lg:flex">
        {links.map((link) => (
          <a key={link.name} className="hover:text-gray-600 hover:underline" href={link.url}>
            {link.name}
          </a>
        ))}
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Open main menu</span>
          {menuOpen ? (
            <FiX className="h-6 w-6" aria-hidden="true" />
          ) : (
            <FiMenu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full bg-linear-to-tr from-[#eef5ff] to-[#f9ffeb] px-5 pb-4 shadow lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              className="block py-2 hover:text-gray-600 hover:underline"
              href={link.url}
              onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
