import { IconType } from "react-icons";

export interface IService {
  Icon: IconType;
  Title: string;
  About: string;
  Id: number;
}

export interface ISkill {
  Icon: IconType;
  Name: string;
  Level: number;
  Id: number;
}
