import React from "react";
import { PageTitle } from "@/components";
import Image from "next/image";
import rickandmortyImg from "../../../public/rickandmorty.jpg";
import nothingatall from "../../../public/nothing.jpg";
import dogeCoin from "../../../public/dogecoin.jpg";
import userList from "../../../public/userList.jpg";
import starWars from "../../../public/starwars.png";

export default function Projects() {
  const ProjectArray = [
    {
      id: 1,
      name: "Rick and Morty Search Box",
      languages: ["React.js", "TypeScript", "Tailwind"],
      img: rickandmortyImg,
      url: "https://rick-and-morty-search-box.vercel.app/",
    },
    {
      id: 2,
      name: "Todo App",
      languages: [
        "Next.js",
        "Next Api",
        "MongoDb",
        "Tailwind",
        "JWT",
        "TypeScript",
      ],
      img: nothingatall,
      url: "https://todo-app-nine-dusky-49.vercel.app/login",
    },
    {
      id: 3,
      name: "Coin Tracker",
      languages: ["Next.js", "Next UI", "Tailwind", "TypeScript"],
      img: dogeCoin,
      url: "https://coin-tracker-wine.vercel.app/",
    },
    {
      id: 4,
      name: "User List",
      languages: [
        "Next.js",
        "Next Auth",
        "Tailwind",
        "TypeScript",
        "DevExtreme",
      ],
      img: userList,
      url: "https://user-list-git-main-kadir-alps-projects.vercel.app/login?callbackUrl=%2Fusers",
    },
    {
      id: 5,
      name: "Star Wars Universe",
      languages: ["React.js", "Sass", "GraphQL", "Apollo Client"],
      img: starWars,
      url: "https://star-wars-chars.vercel.app/",
    },
  ];

  return (
    <div className="p-5 mb-32 ">
      <PageTitle name="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {ProjectArray.reverse().map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-lg p-4 relative 
            overflow-hidden transition duration-300 ease-in-out transform hover:shadow-lg
            flex justify-between flex-col"
          >
            <Image
              width={800}
              height={800}
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <div className="flex flex-wrap mb-2">
              {project.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-full mr-2 mb-2"
                >
                  {language}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" right-4 text-blue-600 hover:text-blue-800 flex justify-end "
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
