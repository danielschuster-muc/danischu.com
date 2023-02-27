import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="flex space-x-4">
        <div className="basis-1/3 flex flex-col text-center gap-4 p-3">
          <div className="border-1 p-1 rounded-full bg-gradient-to-br from-yellow-400 to-green-400 border-transparent">
            <Image
              width="200"
              height="200"
              src="https://avatars.githubusercontent.com/danielschuster-muc"
              alt="Portrait of Daniel"
              priority
              className="grayscale rounded-full h-full w-full"
            />
          </div>
          <div>
            <h2>Daniel Schuster</h2>
          </div>
        </div>
        <div className="basis-2/3 bg-green-600 p-3">
          <p>lorem*20</p>
        </div>
      </div>
    </section>
  );
};

export default About;
