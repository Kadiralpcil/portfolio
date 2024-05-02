import projects from "@/app/projects/page";
import about from "@/app/about/page";
const pages = [
  {
    name: "About",
    path: "/about",
    component: about,
  },
  {
    name: "Projects",
    path: "/projects",
    component: projects,
  },
];

export default pages;
