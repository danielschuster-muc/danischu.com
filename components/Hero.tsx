"use client";

import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <header
      className="container mx-auto flex h-[calc(100vh-80px)] px-10 py-10 text-gray-700 dark:text-white lg:h-[calc(100vh-68px)]"
      id="about">
      <div className="flex flex-col justify-between lg:w-1/2">
        <div className="lg:mt-24">
          <h1 className="mb-6 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-6xl font-bold text-transparent">
            Daniel Schuster
          </h1>
          <h2 className="text-2xl text-gray-600 dark:text-white">
            Computer Science Student at LMU, Munich
          </h2>
        </div>
        <div className="flex flex-col space-y-1 text-lg ">
          <a href="https://github.com/danielschuster-muc" className="flex items-center">
            <FaGithub className="mr-2" />
            <span className="hover:text-gray-600 hover:underline dark:hover:text-gray-300">
              danielschuster-muc
            </span>
          </a>
          <a href="https://linkedin.com/in/danielschuster-muc" className="flex items-center">
            <FaLinkedin className="mr-2" />
            <span className="hover:text-gray-600 hover:underline dark:hover:text-gray-300">
              danielschuster-muc
            </span>
          </a>
          <a href="mailto:contact@danischu.com" className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span className="hover:text-gray-600 hover:underline dark:hover:text-gray-300">
              contact@danischu.com
            </span>
          </a>
        </div>
      </div>
      <div className="relative hidden w-1/2 items-center justify-end lg:flex">
        <Image
          width="400"
          height="400"
          src="/images/profile.png"
          alt="Portrait"
          priority
          quality={75}
          className="my-auto mb-0 h-max w-full object-cover grayscale"
        />
      </div>
    </header>
  );
};

export default Hero;
