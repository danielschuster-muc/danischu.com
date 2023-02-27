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
    <header className="h-screen w-full bg-gradient-to-tr from-gray-900 to-blue-900 flex flex-col items-center justify-center text-center">
      <h1 className="text-white text-5xl font-bold mb-4">
        Hello, I&apos;m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400">
          Daniel Schuster.
        </span>
      </h1>
      <h2
        className={`${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        } transition-all duration-500 ease-in-out text-white`}
      >
        {word1}, {word2} & {word3}
      </h2>
    </header>
  );
};

export default Hero;
