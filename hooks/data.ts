import { IService, ISkill } from "./type";
import { FaInfinity, FaServer } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill, BsCloudFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    Title: "Frontend Devolopment",
    About:
      "I can build a beautiful and scalable SPA and MPA using <b style='color:#40689c !important'>HTML</b>, <b style='color:#40689c !important'>CSS</b> & <b style='color:#40689c !important'>Next.js</b> ",
    Id: 1,
  },
  {
    Icon: FaServer,
    Title: "Backend Development",
    About:
      "I can handle database, server, api using <b style='color:#40689c !important'>Express</b> & other popular frameworks",
    Id: 2,
  },
  {
    Icon: AiOutlineApi,
    Title: "API Development",
    About:
      "I can develop robust REST APIs using <b style='color:#40689c !important'>Django-rest-api</b> & <b style='color:#40689c !important'>Node API</b> ",
    Id: 3,
  },
  {
    Icon: AiOutlineAntDesign,
    Title: "UI/UX Designer",
    About:
      "Stunning user interface designer using <b style='color:#40689c !important'>Figma</b> & <b style='color:#40689c !important'>Framer</b>",
    Id: 4,
  },
  {
    Icon: FaInfinity,
    Title: "DevOps Engineer",
    About:
      "I can develop, manage and debug applications, webpages apps using <b style='color:#40689c !important'>DevOps principles</b> ",
    Id: 5,
  },
  {
    Icon: BsCloudFill,
    Title: "Cloud Engineer",
    About:
      "I can deploy, modify your apps such that it can run on any cloud service provider, Proficient in deploying and managing applications in <b style='color:#40689c !important'> AWS Cloud</b>",
    Id: 6,
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    Name: "Python",
    Level: 70,
    Id: 1,
  },
  {
    Icon: BsCircleFill,
    Name: "JavaScript",
    Level: 65,
    Id: 2,
  },
  {
    Icon: BsCircleFill,
    Name: "Next.js / React ",
    Level: 60,
    Id: 3,
  },
  {
    Icon: BsCircleFill,
    Name: "C++",
    Level: 55,
    Id: 4,
  },
  {
    Icon: BsCircleFill,
    Name: "Solidity",
    Level: 45,
    Id: 5,
  },
  {
    Icon: BsCircleFill,
    Name: "Java",
    Level: 35,
    Id: 7,
  },
  {
    Icon: BsCircleFill,
    Name: "Golang",
    Level: 30,
    Id: 8,
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    Name: "Figma",
    Level: 70,
    Id: 1,
  },
  {
    Icon: BsCircleFill,
    Name: "Github",
    Level: 50,
    Id: 2,
  },
  {
    Icon: BsCircleFill,
    Name: "Docker",
    Level: 45,
    Id: 3,
  },
  {
    Icon: BsCircleFill,
    Name: "AWS",
    Level: 40,
    Id: 4,
  },
  {
    Icon: BsCircleFill,
    Name: "Kubernetes",
    Level: 35,
    Id: 5,
  },
];
