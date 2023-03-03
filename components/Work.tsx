"use client";

import React from "react";
import SingleProject from "./SingleProject";
import { ProjectType } from "@/additional";

import pd1Img from "@/public/images/potterdb-1.jpg";
import soImg from "@/public/images/stackoverflown.jpg";
import portfolioImg from "@/public/images/portfolio-1.jpg";

const projects: ProjectType[] = [
  {
    title: "Potter DB",
    summary:
      "An API with data from the Harry Potter Universe: Characters, Movies, Books, Spells and Potions.",
    description:
      "As a huge Harry Potter fan I create Potter DB using Next.js for the website and Ruby on Rails + PostgreSQL for the API. The API itself provides a vast amount of data related to the Harry Potter Universe such as information on characters, movies, books, spells, and potions, making it a valuable resource for developers and fans of the series alike. Users can search for data using the DB Search function or access it via the API (REST or GraphQL).",
    images: [pd1Img.src],
    technologies: ["react", "next.js", "rails", "mui"],
    source: "https://github.com/danielschuster-muc/potter-db",
    website: "https://potterdb.com",
  },
  {
    title: "Stack Overflown",
    summary:
      "If Stack Overflown was a website, it would be full of programming errors and typos.",
    description:
      "I created Stack Overflown as a humorous take on Stack Overflow. Made with Vue.js it surprises visitors who accidentally misspell the URL, by giving them random jokes and puns instead of the usual technical help.",
    images: [soImg.src],
    technologies: ["vue"],
    source: "https://github.com/danielschuster-muc/stackoverflown",
    website: "https://stackoverflown.com",
  },
  {
    title: "Portfolio",
    summary:
      "A portfolio page about me, my work and my preferred technologies.",
    description:
      "My portfolio page - a personal website that showcases my work and projects as well as my preferred technologies. I built it using React + Next.js and for the visual appealing I used Tailwind CSS.",
    images: [portfolioImg.src],
    technologies: ["react", "next.js", "tailwind"],
    source: "https://github.com/danielschuster-muc/portfolio",
    website: "https://danielschuster.me",
  },
];

const Work = () => {
  return (
    <section id="work">
      <div className="bg-lime-50 py-20 dark:bg-blue-900 md:py-5">
        <div className="container mx-auto px-10">
          <div className="container p-10 text-center">
            <h2 className="text-4xl font-bold text-gray-700 dark:text-white">
              Work.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <SingleProject key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
