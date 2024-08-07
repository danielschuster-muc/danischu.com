"use client";

import React from "react";
import SingleProject from "./SingleProject";
import { ProjectType } from "@/additional";

const projects: ProjectType[] = [
  {
    title: "Potter DB",
    summary:
      "A Harry Potter database for all your wizarding needs: Books, Characters, Movies, Spells and Potions.",
    description:
      "As a passionate Harry Potter fan, I fulfilled my dream of creating a dedicated Harry Potter API using Ruby on Rails and PostgreSQL for the backend API, complemented by a Next.js frontend. This platform serves as an extensive resource for developers and fans alike, offering detailed information on characters, movies, books, spells, and potions. Users can explore data using the DB Search function on the website or access it programmatically via its REST or GraphQL API.",
    image: "/images/potterdb.jpg",
    technologies: ["Next.js", "Ruby on Rails", "Tailwind CSS", "PostgreSQL"],
    source: "https://github.com/danielschuster-muc/potter-db",
    website: "https://potterdb.com",
  },
  {
    title: "Techdalo Website",
    summary:
      "The official website of Techdalo, a social startup that enables Colombian students to pursue a career in tech.",
    description:
      "This website informs visitors about Techdalo's mission, services, and how it supports students in embarking their journey in the tech industry. Developed using React and Next.js, with a visually appealing design implemented using shadcn/ui components, and data management handled through Firebase.",
    image: "/images/techdalo.jpg",
    technologies: ["Next.js", "Firebase", "shadcn/ui"],
    website: "https://techdalo.com",
  },
  {
    title: "CV & DL Project",
    summary:
      "A university project on computer vision and deep learning, focusing on face detection and emotion recognition.",
    description:
      "As part of a university course, our team of 4 developed a face detection and emotion recognition project using Python and PyTorch. The system classifies six emotions, e.g. happiness, anger, and sadness, and detects faces using RFBNet. We pre-trained our emotion recognition model on the AffectNet dataset and fine-tuned it on the RAF-DB dataset, achieving a top-1 accuracy of 71.6 % and a top-3 accuracy of 94.2 % on the given validation set.",
    image: "/images/apron.jpg",
    technologies: ["Python", "PyTorch"],
  },
  {
    title: "Portfolio",
    summary: "A personal portfolio showcasing my projects and preferred technologies.",
    description:
      "This portfolio website is a showcase of projects I have worked on, as well as tools and technologies I frequently use in development. Built with React and Next.js, styled with Tailwind CSS for a clean and responsive design.",
    image: "/images/portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS"],
    source: "https://github.com/danielschuster-muc/portfolio",
    website: "https://danischu.com",
  },
  {
    title: "Void Totem Mod",
    summary: "A Minecraft mod introducing a new totem that prevents you from dying in the void.",
    description:
      "The Void Totem Mod is a Minecraft modification that adds a new totem to the game that prevents players from death in the void. Developed in Java, this mod reached over 30 million downloads on CurseForge for its Forge and Fabric versions.",
    image: "/images/voidtotem.jpg",
    technologies: ["Java"],
    source: "https://github.com/affehund/voidtotem",
    website: "https://curseforge.com/minecraft/mc-mods/voidtotem",
  },
  {
    title: "Stack Overflown",
    summary: "Where Developers Stumble, Mistype, & Learn Spelling",
    description:
      "Stack Overflown is a playful twist on the familiar Stack Overflow platform. Users who misspell the URL are greeted with random jokes and puns, adding a lighthearted touch to the developer community. Built with Vue.js and styled with simple CSS.",
    image: "/images/stackoverflown.jpg",
    technologies: ["Vue.js", "CSS"],
    source: "https://github.com/danielschuster-muc/stackoverflown",
    website: "https://stackoverflown.com",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="py-20 md:py-5">
        <div className="container mx-auto px-10">
          <div className="container p-10 text-center">
            <h2 className="mb-2 text-4xl font-bold text-gray-700 dark:text-white">Projects.</h2>
            <p>A selection of projects I have worked on.</p>
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

export default Projects;
