import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineDownload,
  AiFillMail,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQGu01IqjCOgew/profile-displayphoto-shrink_200_200/0/1646711758573?e=1657756800&v=beta&t=lj6yrT6MyscJFxuFE_nyPQNARzdQZ9_lWVqLXhmg5sg"
        alt="User avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wide font-Kaushan">
        Mir <span className="text-teal-500"> iqrab </span> Farman
      </h3>
      <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full gap-x-2">
        <GiTie className="w-6 h-6 " /> Web developer
      </p>
      <a
        href=""
        download="Minus-resume"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full gap-x-2"
      >
        <AiOutlineDownload className="w-6 h-6 " /> Download resume
      </a>

      <div className="flex justify-around w-9/12 m-auto my-6 text-blue-500 md:w-full">
        <a href="https://github.com/Minus0149" target="_blank" rel="noreferrer">
          <AiFillGithub className="w-8 h-8 cursor-pointer " />
        </a>
        <a
          href="https://www.linkedin.com/in/mir-iqrab-farman-6b0526223/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/minus_luci"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/minus_luci/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div className="py-4 my-5 -m-4 bg-gray-200 ">
        <div className="flex items-center justify-center my-2 gap-x-2">
          <GoLocation className="w-4 h-4" />
          <span>Banglore,India</span>
        </div>
        <div className="flex items-center justify-center my-2 gap-x-2">
          <AiFillMail className="w-4 h-4" />
          <p>Minus.4399@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <button
          onClick={() => window.open("mailto:minus.4399@gmail.com")}
          className="w-8/12 px-5 py-2 my-1 text-white rounded-full bg-gradient-to-r from-blue-700 to-teal-400"
        >
          Email me
        </button>
        <button className="w-8/12 px-5 py-2 my-1 text-white rounded-full bg-gradient-to-r from-blue-700 to-teal-400">
          Toggle theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
