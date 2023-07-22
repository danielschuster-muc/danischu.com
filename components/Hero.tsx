"use client";

const Hero = () => {
  return (
    <header className="flex h-screen w-full flex-col items-center justify-center text-center text-gray-700 dark:text-white">
      <h1 className="mb-4 text-5xl font-bold">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
          Daniel Schuster.
        </span>
      </h1>
    </header>
  );
};

export default Hero;
