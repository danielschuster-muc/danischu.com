"use client";

import { useState, useEffect } from "react";

const words = ["creative", "endurance", "passionate"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const word1 = words[wordIndex];
  const word2 = words[(wordIndex + 1) % words.length];
  const word3 = words[(wordIndex + 2) % words.length];

  return (
    <header className="flex h-screen w-full flex-col items-center justify-center text-center text-gray-700 dark:text-white">
      <h1 className="mb-4 text-5xl font-bold">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
          Daniel Schuster.
        </span>
      </h1>
      <h2
        className={`${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        } transition-all duration-500 ease-in-out `}
      >
        {word1}, {word2} & {word3}
      </h2>
    </header>
  );
};

export default Hero;
