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
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex basis-1/3 flex-col gap-4 rounded-lg border border-gray-200 bg-white text-center shadow dark:border-gray-700 dark:bg-gray-800">
            <div className="mx-5 mt-5 rounded-full bg-gradient-to-tr from-yellow-400 to-green-400 p-2 transition duration-500 ease-in-out hover:bg-gradient-to-r hover:p-3">
              <Image
                width="200"
                height="200"
                src="https://avatars.githubusercontent.com/danielschuster-muc"
                alt="Portrait of Daniel"
                priority
                quality={100}
                className="h-full w-full rounded-full grayscale hover:grayscale-0"
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
          <div className="basis-2/3 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
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
            <ol className="items-center p-2 sm:flex">
              {events.map((e) => (
                <li key={e.title} className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                      <FaCalendar className="h-3 w-3 text-blue-800 dark:text-blue-300" />
                    </div>
                    <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {e.title}
                    </h3>
                    <time className="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
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
