import { TechnologyType } from "@/additional";

export default function ColoredBadge({ technology }: { technology: TechnologyType }) {
  let classes: string = "px-2 py-1 text-sm font-medium rounded ";

  switch (technology) {
    case "Next.js":
      classes += "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      break;
    case "Tailwind CSS":
      classes += "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300";
      break;
    case "Vue.js":
      classes += "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      break;
    case "Ruby on Rails":
      classes += "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      break;
    case "CSS":
      classes += "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300";
      break;
    case "Java":
      classes += "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
      break;
    case "Firebase":
      classes += "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300";
      break;
    case "PostgreSQL":
      classes += "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300";
      break;
    case "shadcn/ui":
      classes += "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300";
      break;
    case "Python":
      classes += "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      break;
    case "PyTorch":
      classes += "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      break;
    // case "purple":
    //   classes += "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    //   break;
    // case "rose":
    //   classes += "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300";
    //   break;
    // case "sky":
    //   classes += "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300";
    //   break;
    // case "teal":
    //   classes += "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300";
    //   break;
    // case "yellow":
    //   classes += "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    //   break;
    default:
      classes += "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      break;
  }

  return <span className={classes}>{technology}</span>;
}
