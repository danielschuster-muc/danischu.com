import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="z-10 flex shrink-0 flex-col items-center justify-between px-5 py-3 md:flex-row">
      <div className="flex justify-center md:justify-start">
        <div className="transition-all hover:scale-105 hover:text-gray-900">
          <a href="https://github.com/danielschuster-muc" rel="noreferrer noopener">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
        <div className="mx-4 transition-all hover:scale-105 hover:text-gray-900">
          <Link href="https://www.linkedin.com/in/danielschuster-muc/" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="my-4 text-center md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Daniel Schuster. All Rights Reserved.
        </p>
      </div>
      <div className="ml-4 text-center md:text-right">
        <p className="text-sm hover:text-gray-600 hover:underline">
          <Link href="/legal-notice">Legal Notice</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
