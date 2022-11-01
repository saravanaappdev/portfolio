import React from "react";
import htmlIcon from "../assets/techonogy-icons/html.png";
import cssIcon from "../assets/techonogy-icons/css.png";
import javascriptIcon from "../assets/techonogy-icons/javascript.png";
import githubIcon from "../assets/techonogy-icons/github.png";
import nodeIcon from "../assets/techonogy-icons/node.png";
import tailwindIcon from "../assets/techonogy-icons/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      title: "HTML",
      src: htmlIcon,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: cssIcon,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "JS",
      src: javascriptIcon,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "Github",
      src: githubIcon,
      style: "shadow-pink-400",
    },
    {
      id: 5,
      title: "Node",
      src: nodeIcon,
      style: "shadow-white",
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwindIcon,
      style: "shadow-sky-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full text-white h-full"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-0 sm:px-12">
          {techs.map(({ id, title, src, style }) => {
            return (
              <div
                id={id}
                key={id}
                className={`flex flex-col justify-center items-center rounded-lg
                shadow-md hover:scale-105 duration-200 ${style}`}
              >
                <img src={src} alt="html" className="max-auto w-20" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
