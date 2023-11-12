export type TechnologyType =
  | "css"
  | "next.js"
  | "react"
  | "ruby on rails"
  | "tailwindcss"
  | "vue.js";

export type ProjectType = {
  title: string;
  summary: string;
  description: string;
  image: string;
  technologies: TechnologyType[];
  source: string;
  website: string;
};
