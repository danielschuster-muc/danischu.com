"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeChange = (event: any) => {
    console.log(event.target.value);
    setTheme(event.target.value);
  };

  return (
    <footer className="flex flex-col md:flex-row items-center bg-gray-200 justify-between dark:bg-transparent py-3 px-5">
      <div className="flex justify-center md:justify-start">
        <div>
          <a
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            href="https://github.com/danielschuster-muc"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className="mx-4">
          <a
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            href="https://www.linkedin.com/in/danielschuster-muc/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="mx-4">
          <select
            value={theme}
            onChange={handleThemeChange}
            className="bg-gray-200 text-gray-700 dark:bg-transparent dark:text-white border border-gray-400 rounded-md"
          >
            <option value="dark" className="bg-gray-200 dark:bg-gray-800">
              Dark
            </option>
            <option value="light" className="bg-gray-200 dark:bg-gray-800">
              Light
            </option>
            <option value="system" className="bg-gray-200 dark:bg-gray-800">
              System
            </option>
          </select>
        </div>
      </div>
      <div className="text-center md:text-left my-4">
        <p className="text-sm text-gray-700 dark:text-white">
          &copy; {new Date().getFullYear()} Daniel Schuster. All Rights
          Reserved.
        </p>
      </div>
      <div className="text-center md:text-right ml-4">
        <Link
          className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
          href="/legal-notice"
        >
          <p className="text-sm"></p>
          Legal Notice
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
