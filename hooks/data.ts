import {IService} from "./type";
import {FaServer} from "react-icons/fa";
import {RiComputerLine} from "react-icons/ri";
import {AiOutlineAntDesign, AiOutlineApi} from "react-icons/ai";

export const services:IService[] = [
  {  
    Icon: RiComputerLine,
    Title: "Frontend Devolopment",
    About: "I can build a beautiful and scalable SPA and MPA using <b style='color:#40689c !important'>HTML</b>, <b style='color:#40689c !important'>CSS</b> & <b style='color:#40689c !important'>Next.js</b> ",
    Id:1
  },
  {  
    Icon: FaServer,
    Title: "Backend Development",
    About: "I can handle database, server, api using <b style='color:#40689c !important'>Express</b> & other popular frameworks",
    Id:2
  },
  {  
    Icon: AiOutlineApi,
    Title: "API Development",
    About: "I can develop robust REST APIs using <b style='color:#40689c !important'>Django-rest-api</b> & <b style='color:#40689c !important'>Node API</b> ",
    Id:3
  },
  {  
    Icon: AiOutlineAntDesign,
    Title: "UI/UX Designer",
    About: "stunning user interface designer using <b style='color:#40689c !important'>Figma</b> & <b style='color:#40689c !important'>Framer</b>",
    Id:4
  },
]
