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
} from "react-icons/si";
import { DiJava, DiReact, DiRuby, DiSass } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";

const tools = [
  {
    label: "Ruby",
    icon: DiRuby,
  },
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
    label: "Tailwind CSS",
    icon: SiTailwindcss,
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
    label: "Postgresql",
    icon: SiPostgresql,
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
    label: "Sass",
    icon: DiSass,
  },
  {
    label: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    label: "MUI",
    icon: SiMui,
  },
];

const Tools = () => {
  return (
    <section id="tools" className="rounded-lg p-20">
      <div className="container mx-auto px-10">
        <div className="container p-10 text-center">
          <h2 className="mb-2 text-4xl font-bold text-gray-700 dark:text-white">Tools.</h2>
          <p>Technologies and Tools I frequently use.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tools.map((t) => {
            const CustomIcon = t.icon;
            return (
              <div
                key={t.label}
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium shadow hover:scale-105 dark:border-gray-700 dark:bg-gray-800">
                <span className="mr-2 flex items-center justify-center">
                  <CustomIcon className="h-5 w-5" aria-label={t.label} />
                </span>
                <span>{t.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
