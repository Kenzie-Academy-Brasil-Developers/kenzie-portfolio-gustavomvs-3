import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa"
import { SiDjango } from "react-icons/si"
import { SiPostgresql } from "react-icons/si"
import { DiMysql } from "react-icons/di"

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "Docker", img: FaDocker },
  { title : "Python", img: FaPython },
  { title : "Django", img: SiDjango},
  { title : "Postgresssql", img: SiPostgresql},
  { title : "Sql", img: DiMysql}

];
