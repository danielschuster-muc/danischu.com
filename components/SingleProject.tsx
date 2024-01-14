import { ProjectType } from "@/additional";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import ColoredBadge from "./ColoredBadge";
import Modal from "./Modal";

export default function SingleProject({ project }: { project: ProjectType }) {
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
      <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <Image
          className="rounded-t-lg grayscale hover:grayscale-0"
          src={project.image}
          alt={`Image of ${project.title}`}
          width="800"
          height="600"
          onClick={() => setShowModal(true)}
        />
        <div className="flex h-full flex-col justify-between p-5">
          <h3 className="mb-2 block text-2xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-200">{project.summary}</p>
          <div className="mt-3 flex flex-shrink items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="my-2 mr-auto inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700">
              Read more
              <HiArrowRight className="ml-2" />
            </button>
            <Link
              href={project.source}
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
              title="Source">
              <span className="sr-only">Source</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5 transition-all hover:scale-105"
                viewBox="0 0 496 512"
                fill="currentColor"
                height="1em"
                width="1em">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </Link>
            <Link
              href={project.website}
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
              title="Website">
              <span className="sr-only">Website</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5 transition-all hover:scale-105"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-1 border-t p-5 dark:border-gray-600">
          {project.technologies.map((technology) => {
            return <ColoredBadge key={technology} technology={technology} />;
          })}
        </div>
      </div>
    </>
  );
}
