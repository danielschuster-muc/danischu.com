import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";

const events = [
  {
    title: "Web Development Bootcamp",
    date: "October - December 2021",
    description: "Le Wagon",
  },
  {
    title: "Software Development Intern",
    date: "January - February 2022",
    description: "QAware",
  },
  {
    title: "Computer Science Student",
    date: "Since October 2022",
    description: "LMU",
  },
];

// TODO: icons, link to gh and site

const calcAge = (date: Date) => {
  var ms = Date.now() - date.getTime();
  var ageDate = new Date(ms);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const age = calcAge(new Date(2003, 3, 23));

const About = () => {
  return (
    <section id="about" className="pb-20">
      <div className="container mx-auto px-10">
        <div className="flex flex-col sm:flex-row md:space-x-4">
          <div className="basis-1/3 flex flex-col text-center gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-2 mx-5 mt-5 rounded-full bg-gradient-to-tr from-yellow-400 to-green-400 hover:p-3 hover:bg-gradient-to-r transition duration-500 ease-in-out">
              <Image
                width="200"
                height="200"
                src="https://avatars.githubusercontent.com/danielschuster-muc"
                alt="Portrait of Daniel"
                priority
                quality={100}
                className="grayscale hover:grayscale-0 rounded-full h-full w-full"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Who is this guy?
              </h3>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
                I am Daniel, {age} years old, currently studying Computer
                Science in Munich, Germany.
              </p>
            </div>
          </div>
          <div className="basis-2/3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
              About.
            </h2>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur doloribus aut veritatis nesciunt ipsum voluptates
              aliquam ut minima commodi ad, earum odio alias voluptate beatae!
              Esse, impedit! Omnis, reprehenderit labore. Sit necessitatibus eos
              dicta sapiente dolores dignissimos repellat consectetur voluptate
              rerum deserunt quis aliquid architecto incidunt voluptas, delectus
              nihil illum pariatur assumenda iusto. Ex necessitatibus iusto
              nostrum quae fugiat similique. Repellat fuga exercitationem
              beatae, alias id ad eaque aspernatur eligendi rerum voluptatum
              quisquam cum maiores culpa earum saepe natus, suscipit repudiandae
              provident tempore at. Vero earum tenetur incidunt maiores qui!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim
              temporibus consectetur perferendis autem itaque laboriosam
              explicabo labore. Consectetur facere similique dignissimos
              voluptatem aliquid vel ipsa, voluptas maiores recusandae id! Neque
              tempora odio atque ipsum distinctio omnis repellat molestiae,
              inventore, fugiat quod minus labore incidunt sunt sed cum sint est
              beatae impedit, placeat magni minima? Amet totam fugiat corrupti
              sit?
            </p>
            <ol className="p-2 items-center sm:flex">
              {events.map((e) => (
                <li key={e.title} className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <FaCalendar className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {e.title}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                      {e.date}
                    </time>
                    <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                      {e.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
