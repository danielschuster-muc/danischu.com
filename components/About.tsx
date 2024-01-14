import Image from "next/image";
import React from "react";

const calcAge = (date: Date) => {
  var ms = Date.now() - date.getTime();
  var ageDate = new Date(ms);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const age = calcAge(new Date(2003, 3, 23)); // why 23rd of April? Because it's my birthday! 🎉

const About = () => {
  return (
    <section id="about" className="pb-10">
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
              Ludwig-Maximilians-Universität in Munich since October 2022. Since September 2023 I
              have been a working student at Siemens AG. In addition, I am also active member of the
              student initiative Enactus München e.V. in the Techdalo project, which helps Colombian
              school graduates finding a job in IT.
              <br />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
