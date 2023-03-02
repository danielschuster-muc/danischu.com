import Image from "next/image";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import Modal from "./Modal";

export default function SingleProject({
  project,
}: {
  project: {
    title: string;
    description: string;
    image: string;
    summary: string;
  };
}) {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          isVisible={showModal}
          title={project.title}
          image={project.image}
          description={project.description}
        />
      )}
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg grayscale hover:grayscale-0"
          src={project.image}
          alt={`Image of ${project.title}`}
          width="500"
          height="500"
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
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <HiArrowRight className="ml-2 -mr-1" />
          </button>
        </div>
      </div>
    </>
  );
}
