import React from "react";

export interface PersonalInfoProps{
  intro:String,
  description:String
}
const About = ({intro, description}:PersonalInfoProps) => {
  return (
    <div id="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] w-full grid sm:grid-cols-2 gap-12 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>{intro}</p>
            <p></p>
          </div>
          <div>
            <p>
              {description}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
