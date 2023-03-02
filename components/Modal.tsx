import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";
import { FiX } from "react-icons/fi";

export default function Modal({
  title,
  description,
  image,
  onClose,
}: {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
  isVisible: boolean;
}) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 backdrop-blur-sm bg-gray-900 bg-opacity-90 transition-opacity transition-300 overflow-x-hidden overflow-y-auto flex justify-center items-center`}
      aria-labelledby={`Modal of ${title}`}
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div className="relative w-screen max-w-lg h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <FiX className="block h-6 w-6" />
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
            <p className="text-base text-gray-500 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
