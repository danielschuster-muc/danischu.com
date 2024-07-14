export type TechnologyType =
  | "CSS"
  | "Next.js"
  | "React"
  | "Ruby on Rails"
  | "Tailwind CSS"
  | "Vue.js"
  | "Java"
  | "Firebase"
  | "shadcn/ui"
  | "PostgreSQL";

export type ProjectType = {
  title: string;
  summary: string;
  description: string;
  image: string;
  technologies: TechnologyType[];
  source?: string;
  website: string;
};
