"use client";

import React from "react";
import SingleProject from "./SingleProject";

import pd1Img from "@/public/images/potterdb-1.jpg";
import soImg from "@/public/images/stackoverflown.jpg";
import portfolioImg from "@/public/images/portfolio-1.jpg";
import { ProjectType } from "@/additional";

const projects: ProjectType[] = [
  {
    title: "Potter DB",
    summary:
      "An API with data from the Harry Potter Universe: Characters, Movies, Books, Spells and Potions.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
    images: [pd1Img.src],
    technologies: ["react", "ruby on rails", "next.js", "mui"],
  },
  {
    title: "Stack Overflown",
    summary:
      "Stack Overflown is a comical spin on the popular technical Q&A site, Stack Overflow, serving up random jokes and puns to unsuspecting visitors who misspell the URL.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
    images: [soImg.src],
    technologies: ["vue"],
  },
  {
    title: "Portfolio",
    summary:
      "A portfolio page about me, my work and my preferred technologies.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
    images: [portfolioImg.src],
    technologies: ["next.js", "react", "tailwind css"],
  },
];

const Work = () => {
  return (
    <section id="work">
      <div
        className="bg-lime-50 dark:bg-blue-900 py-20 md:py-5 transition duration-1500 ease-in-out"
        style={{ willChange: "transform" }}
      >
        <div className="container mx-auto px-10">
          <div className="text-center p-10 container px-20 ">
            <h2 className="text-4xl font-bold text-gray-700 dark:text-white">
              Work.
            </h2>
            <p className="text-gray-500 dark:text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              veritatis. Dolores aut qui, at dolorum vel a quo fugiat blanditiis
              rem fuga officia ipsa labore ipsam facere, veniam, repellendus
              alias.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
