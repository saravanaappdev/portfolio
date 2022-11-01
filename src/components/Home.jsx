import React from "react";
import HeroImage from "../assets/heroImage1.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home">
      <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
        <div
          className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4
        md:flex-row"
        >
          <div className="flex flex-col justify-center items-start h-full">
            <h2 className="text-4xl font-bold text-white  md:text-7xl sm:text-5xl">
              Im a Frontend Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I have 4 years of Experience building and designing software.
              Currently, love to work on web applicaitions using technologies
              like React, Tailwind, Next js and GraphQL.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                offset={-80}
                className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="rounded-2xl mx-auto w-2/3"
              src={HeroImage}
              alt="My Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
