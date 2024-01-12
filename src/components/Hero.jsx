import React from "react";
import heroImg from "../assets/hero6.svg";
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";

import { AiTwotoneMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      className="bg-gradient-to-b from-violet-100 to-lime-100 pt-44 pb-28"
      id="home"
    >
      <div className="align-element grid items-center gap-8 md:grid-cols-2 md:px-20 ">
        <article>
          <h1 className="text-6xl font-semibold mb-6 tracking-wider text-black">
            Fay.
          </h1>
          <p className="text-4xl font-bold mb-2 tracking-wider text-violet-700">
            Front-End Developer.
          </p>
          <p className="text-2xl font-semibold  tracking-wider text-gray-700">
            Creative Problem Solver. Design strategist.
          </p>

          <p className="mt-2 text-lg text-w capitalize tracking-wide font-medium text-slate-500">
            who turns abstract ideas into interactive practices.
          </p>
          <div className="flex gap-x-4 mt-4 ">
            <a href="https://github.com/Jpcjo" target="_blank">
              <AiTwotoneMail
                className="h-6 w-6 text-slate-400
              hover:text-violet-600 hover:scale-125 duration-300"
              />
            </a>
            <a href="https://github.com/Jpcjo" target="_blank">
              <FaLinkedinIn className="h-6 w-6 text-slate-400 hover:text-sky-500 hover:scale-125 duration-300" />
            </a>
            <a href="https://github.com/Jpcjo" target="_blank">
              <FaGithubSquare className="h-6 w-6 text-slate-400 hover:text-slate-700 hover:scale-125 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="heroImgOffice" className="h-80 lg:h-auto" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
