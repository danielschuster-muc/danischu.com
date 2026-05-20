import { TechnologyType } from "@/types";

export default function ColoredBadge({ technology }: { technology: TechnologyType }) {
  let classes: string = "px-1 py-0.5 text-sm font-medium rounded ";

  switch (technology) {
    case "Next.js":
      classes += "bg-amber-100 text-amber-800";
      break;
    case "Tailwind CSS":
      classes += "bg-fuchsia-100 text-fuchsia-800";
      break;
    case "Vue.js":
      classes += "bg-green-100 text-green-800";
      break;
    case "Ruby on Rails":
      classes += "bg-red-100 text-red-800";
      break;
    case "CSS":
      classes += "bg-violet-100 text-violet-800";
      break;
    case "Java":
      classes += "bg-indigo-100 text-indigo-800";
      break;
    case "Firebase":
      classes += "bg-emerald-100 text-emerald-800";
      break;
    case "PostgreSQL":
      classes += "bg-lime-100 text-lime-800";
      break;
    case "shadcn/ui":
      classes += "bg-cyan-100 text-cyan-800";
      break;
    case "Python":
      classes += "bg-orange-100 text-orange-800";
      break;
    case "PyTorch":
      classes += "bg-pink-100 text-pink-800";
      break;
    default:
      classes += "bg-gray-100 text-gray-800";
      break;
  }

  return <span className={classes}>{technology}</span>;
}
