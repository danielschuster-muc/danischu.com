import React from "react";

import { IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiPostgresql,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiMui,
  SiGit,
  SiGithub,
  SiRubyonrails,
  SiPython,
  SiFirebase,
} from "react-icons/si";
import { DiJava, DiReact, DiRuby, DiSass } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";

const tools = [
  {
    label: "Java",
    icon: DiJava,
  },
  {
    label: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "React",
    icon: DiReact,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "Ruby",
    icon: DiRuby,
  },
  {
    label: "Ruby on Rails",
    icon: SiRubyonrails,
  },
  {
    label: "Python",
    icon: SiPython,
  },
  {
    label: "HTML",
    icon: SiHtml5,
  },
  {
    label: "CSS",
    icon: SiCss3,
  },
  {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    label: "Git",
    icon: SiGit,
  },
  {
    label: "GitHub",
    icon: SiGithub,
  },
  {
    label: "Svelte",
    icon: SiSvelte,
  },
  {
    label: "Vue.js",
    icon: FaVuejs,
  },
  {
    label: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    label: "Firebase",
    icon: SiFirebase,
  },
];

const Tools = () => {
  return (
    <section id="tools">
      <div className="py-20 md:py-5">
        <div className="container mx-auto px-10">
          <div className="container p-10 text-center">
            <h2 className="mb-2 text-4xl font-bold text-gray-700 dark:text-white">Tools.</h2>
            <p>Tools and Technologies I frequently use.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tools.map((t) => {
              const CustomIcon = t.icon;
              return (
                <div
                  key={t.label}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium shadow transition-all hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
                  <span className="mr-2 flex items-center justify-center">
                    <CustomIcon className="h-5 w-5" aria-label={t.label} />
                  </span>
                  <span>{t.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
