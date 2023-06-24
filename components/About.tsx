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

// don't ask me why I'm using a date object here instead of a string, i just did it
const age = calcAge(new Date(2003, 3, 23)); // why 23rd of April? Because it's my birthday! 🎉

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
                className="h-full w-full rounded-full grayscale transition-all hover:grayscale-0"
              />
            </div>
            <div className="p-5">
              <p className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Who is this guy?
              </p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
                I am Daniel, a {age} y.o. Computer Science Student, based in Munich, Germany.
              </p>
            </div>
          </div>
          <div className="basis-2/3 rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
              About.
            </h2>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-300">
              I have been studying Computer Science with a minor in Business Administration at
              Ludwig-Maximilians-Universität in Munich since October 2022. In addition, I am also
              active member of the student initiative Enactus München e.V. in the Techdalo project,
              which helps Colombian school graduates finding a job in IT. <br />
              Already during school I discovered my interest in programming, created my first small
              websites, developed Minecraft modifications and programmed Discord bots.
              <br />
              After graduating from high school in July 2021, I participated in a web development
              bootcamp at Le Wagon Munich. It was a very intensive and exciting time, in which I
              dived deep into web development. Afterwards I did a 6-week software internship at
              QAware GmbH, where I could peek into the work of professional programming during a
              project for a large german car manufacturer. My tasks included the creation of web
              components to display check control messages and the setup of automated UI tests.
              <br />
              Afterwards, I worked as a freelancer for 2 months to support the development of a
              start-up in the field of &quot;workation as a service&quot; and mainly took care of
              database setup and data model creation & validation. Until the start of my studies I
              was helping out at the Münchner Tafel.
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
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{e.title}</h3>
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
