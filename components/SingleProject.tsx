import { ProjectType } from "@/additional";
import Image from "next/image";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import ColoredBadge from "./ColoredBadge";
import Modal from "./Modal";

// TODO: link to gh and live preview / website
export default function SingleProject({ project }: { project: ProjectType }) {
  const [showModal, setShowModal] = useState<boolean>(false);

  let colors = [
    "amber",
    "blue",
    "cyan",
    "emerald",
    "fuchsia",
    "green",
    "indigo",
    "lime",
    "orange",
    "pink",
    "purple",
    "red",
    "rose",
    "sky",
    "teal",
    "violet",
    "yellow",
  ];

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          isVisible={showModal}
          title={project.title}
          image={project.images[0]}
          description={project.description}
        />
      )}
      <div className="flex flex-col flex-nowrap rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <Image
          className="rounded-t-lg grayscale hover:grayscale-0"
          src={project.images[0]}
          alt={`Image of ${project.title}`}
          width="500"
          height="500"
          onClick={() => setShowModal(true)}
        />
        <div className="p-5">
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">
            {project.summary}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Read more
            <HiArrowRight className="ml-2" />
          </button>
        </div>
        <div className="mt-auto flex border-t p-5 dark:border-gray-600">
          {project.technologies.map((technology) => {
            const randomItem = colors.splice(
              Math.floor(Math.random() * colors.length),
              1
            )[0];

            return (
              <ColoredBadge
                key={technology}
                technology={technology}
                color={randomItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
