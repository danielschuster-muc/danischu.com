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
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
    images: [pd1Img.src],
    technologies: ["react", "next.js", "rails", "mui"],
    source: "https://github.com/danielschuster-muc/potter-db",
    website: "https://potterdb.com",
  },
  {
    title: "Stack Overflown",
    summary:
      "Stack Overflown is a comical spin on the popular technical Q&A site, Stack Overflow, serving up random jokes and puns to unsuspecting visitors who misspell the URL.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
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
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
    images: [portfolioImg.src],
    technologies: ["react", "next.js", "tailwind"],
    source: "https://github.com/danielschuster-muc/portfolio",
    website: "https://danielschuster.me",
  },
];

const Work = () => {
  return (
    <section id="work">
      <div
        className="duration-1500 bg-lime-50 py-20 transition ease-in-out dark:bg-blue-900 md:py-5"
        style={{ willChange: "transform" }}
      >
        <div className="container mx-auto px-10">
          <div className="container p-10 px-20 text-center ">
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
