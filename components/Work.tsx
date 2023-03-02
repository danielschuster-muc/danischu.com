"use client";

import Image from "next/image";
import React, { useState } from "react";

import { HiArrowRight } from "react-icons/hi";
import Modal from "./Modal";
import SingleProject from "./SingleProject";

const projects = [
  {
    title: "Project 1",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
  },
  {
    title: "Project 2",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
  },
  {
    title: "Project 3",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
  },
  {
    title: "Project 4",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, debitis rerum voluptates pariatur deserunt excepturi incidunt illo voluptatem labore exercitationem unde veniam qui perspiciatis nobis amet minima et velit commodi.",
  },
];

const Work = () => {
  return (
    <section id="work">
      <div
        className="bg-lime-50 dark:bg-indigo-600 py-20 md:py-5 transition duration-1500 ease-in-out"
        style={{ willChange: "transform" }}
      >
        <div className="container mx-auto px-10">
          <div className="text-center p-10 container px-20 ">
            <h2 className="text-4xl font-bold text-gray-700 dark:text-white">
              Work.
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
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
