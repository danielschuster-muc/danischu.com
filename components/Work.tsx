"use client";

import React from "react";
import SingleProject from "./SingleProject";
import { ProjectType } from "@/additional";

import potterdbImg from "@/public/images/potterdb.jpg";
import stackoverflownImg from "@/public/images/stackoverflown.jpg";
import portfolioImg from "@/public/images/portfolio.jpg";

const projects: ProjectType[] = [
  {
    title: "Potter DB",
    summary:
      "A Harry Potter database for all your wizarding needs: Books, Characters, Movies, Spells and Potions.",
    description:
      "As a huge Harry Potter fan I always wanted to create a Harry Potter API, so I made one. It is built with Ruby on Rails + PostgreSQL for the API and Next.js for the website where users can search for data.The API itself provides a vast amount of data related to the Harry Potter Universe such as information on characters, movies, books, spells, and potions, making it a valuable resource for developers and fans of the series alike (such a me). Users can search for data using the DB Search function or access it via the API (REST or GraphQL).",
    image: potterdbImg.src,
    technologies: ["react", "next.js", "ruby on rails", "tailwindcss"],
    source: "https://github.com/danielschuster-muc/potter-db",
    website: "https://potterdb.com",
  },
  {
    title: "Stack Overflown",
    summary: "Where Developers Stumble, Mistype, & Learn Spelling",
    description:
      "I created Stack Overflown as a humorous take on Stack Overflow. Made with Vue.js, it surprises visitors who accidentally misspell the URL, by giving them random jokes and puns instead of the usual technical help.",
    image: stackoverflownImg.src,
    technologies: ["vue.js", "css"],
    source: "https://github.com/danielschuster-muc/stackoverflown",
    website: "https://stackoverflown.com",
  },
  {
    title: "Portfolio",
    summary: "A portfolio page about me, my work and my preferred technologies.",
    description:
      "My portfolio is a personal website that showcases my work and projects as well as tools and technologies I frequently use when coding. I built it with React + Next.js, and for the visual appealing I used Tailwind CSS.",
    image: portfolioImg.src,
    technologies: ["react", "next.js", "tailwindcss"],
    source: "https://github.com/danielschuster-muc/portfolio",
    website: "https://danischu.com",
  },
];

const Work = () => {
  return (
    <section id="work">
      <div className="py-20 md:py-5">
        <div className="container mx-auto px-10">
          <div className="container p-10 text-center">
            <h2 className="mb-2 text-4xl font-bold text-gray-700 dark:text-white">Work.</h2>
            <p>A selection of the best projects I have done so far.</p>
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
