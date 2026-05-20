"use client";

import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
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
      <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow">
        <Image
          className="rounded-t-lg grayscale transition-all hover:grayscale-0"
          src={project.image}
          alt={`Image of ${project.title}`}
          width="800"
          height="600"
          onClick={() => setShowModal(true)}
        />
        <div className="flex h-full flex-col justify-between p-5">
          <h3 className="mb-2 block text-2xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="text-gray-700">{project.summary}</p>
          <div className="mt-3 flex shrink items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="my-2 mr-auto inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100">
              Read more
              <FaArrowRight className="ml-2" />
            </button>
            {project.source && (
              <Link
                href={project.source}
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-gray-900"
                title="Source">
                <span className="sr-only">Source</span>
                <FaGithub className="h-5 w-5 transition-all hover:scale-105" />
              </Link>
            )}
            {project.website && (
              <Link
                href={project.website}
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-gray-900"
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
            )}
          </div>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-1 border-t border-gray-200 p-5">
          {project.technologies.map((technology) => {
            return <ColoredBadge key={technology} technology={technology} />;
          })}
        </div>
      </div>
    </>
  );
}
