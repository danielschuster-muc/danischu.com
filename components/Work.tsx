import Image from "next/image";
import React from "react";

import { HiArrowRight } from "react-icons/hi";

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
    <section
      id="work"
      className="bg-orange-50 dark:bg-gray-700 py-20 rounded-lg"
    >
      <div className="container mx-auto px-10">
        <div className="text-center p-10 container px-20 text-gray-700 dark:text-white">
          <h2 className="text-3xl font-bold">Work</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            veritatis. Dolores aut qui, at dolorum vel a quo fugiat blanditiis
            rem fuga officia ipsa labore ipsam facere, veniam, repellendus
            alias.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg grayscale hover:grayscale-0"
                  src={p.image}
                  alt=""
                  width="500"
                  height="500"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {p.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">
                  {p.summary}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <HiArrowRight className="ml-2 -mr-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
