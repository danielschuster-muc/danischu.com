import Image from "next/image";
import React, { useState } from "react";

const Modal = ({
  title,
  description,
  image,
  setIsOpen,
}: {
  title: string;
  description: string;
  image: string;
  setIsOpen: (val: boolean) => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div
        id={`modal-${title}`}
        className="fixed inset-0 flex justify-center items-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      >
        <div className="relative w-full h-full max-w-lg md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <Image
                className="rounded-lg"
                src={image}
                alt={`Image of ${title}`}
                width="500"
                height="500"
              />
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
