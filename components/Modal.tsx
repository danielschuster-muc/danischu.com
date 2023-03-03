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
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-90 backdrop-blur-sm`}
      aria-labelledby={`Modal of ${title}`}
      role="dialog"
      aria-modal="true"
      onClick={handleClose}>
      <div className="relative h-auto w-screen max-w-xl">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}>
              <FiX className="block h-6 w-6" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="space-y-6 p-6">
            <Image
              className="rounded-lg"
              src={image}
              alt={`Image of ${title}`}
              width="500"
              height="500"
            />
            <p className="text-base text-gray-500 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
