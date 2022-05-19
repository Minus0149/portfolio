import {IService} from "./type";
import {FaServer} from "react-icons/fa";
import {RiComputerLine} from "react-icons/ri";
import {AiOutlineAntDesign, AiOutlineApi} from "react-icons/ai";

export const services:IService[] = [
  {  
    icon: RiComputerLine,
    title: "Frontend Devolopment",
    about: "I can build a beautiful and scalable SPA and MPA using <b>HTML</b>, <b>CSS</b> & <b>Next.js</b> ",
  },
  {  
    icon: FaServer,
    title: "Backend Development",
    about: "i can handle database, server, api using <b>Express</b> & other popular frameworks",
  },
  {  
    icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust REST APIs using <b>django-rest-api</b> & <b>Node API</b> ",
  },
  {  
    icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about: "stunning user interface designer using <b>Figma</b> & <b>Framer</b>",
  },
]
